import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from nltk.stem import WordNetLemmatizer
import string
from collections import Counter

# Download required NLTK resources if not already present
nltk.download('punkt', quiet=True)
nltk.download('stopwords', quiet=True)
nltk.download('averaged_perceptron_tagger', quiet=True)
nltk.download('wordnet', quiet=True)

def extract_keywords(input_file, output_file):
    """
    Extracts keywords from a text file and writes them to another file.

    Args:
        input_file (str): Path to the input text file.
        output_file (str): Path to the output file for keywords.
    """

    try:
        with open(input_file, 'r', encoding='utf-8') as f:
            text = f.read().lower()  # Convert entire text to lowercase

        # Tokenize the text
        tokens = word_tokenize(text)

        # Remove stop words, punctuation, and numbers
        stop_words = set(stopwords.words('english'))
        punctuation = set(string.punctuation)
        filtered_tokens = [w for w in tokens if w not in stop_words
                           and w not in punctuation
                           and not w.replace('.', '').isdigit()]  # Remove numbers

        # Lemmatization
        lemmatizer = WordNetLemmatizer()
        lemmatized_tokens = [lemmatizer.lemmatize(w) for w in filtered_tokens]

        # Part-of-speech (POS) tagging to identify noun phrases
        tagged_tokens = nltk.pos_tag(lemmatized_tokens)
        noun_phrases = []
        for i, (word, tag) in enumerate(tagged_tokens):
            if tag.startswith('NN'):  # Noun
                if i > 0 and tagged_tokens[i - 1][1].startswith('JJ'):  # Adjective before noun
                    noun_phrases.append(tagged_tokens[i - 1][0] + ' ' + word)
                noun_phrases.append(word)

        # Combine lemmatized tokens and noun phrases
        all_keywords = lemmatized_tokens + noun_phrases

        # Calculate word frequencies
        word_frequencies = Counter(all_keywords)

        # Extract keywords based on frequency and length
        keywords = [word for word, freq in word_frequencies.items()
                    if freq > 1 and len(word) > 2]  # Words with frequency > 1 and length > 2

        # Add specific job-related terms (in lowercase)
        job_related_terms = {'c++', 'python', 'api', 'pmp', 'csslp'}
        keywords.extend([term for term in job_related_terms if term in text])

        # Remove duplicates and sort
        keywords = sorted(set(keywords), key=lambda x: (-word_frequencies[x], x))

        # Clear the output file and write keywords
        with open(output_file, 'w', encoding='utf-8') as outfile:
            for keyword in keywords:
                outfile.write(keyword + '\n')

    except FileNotFoundError:
        print(f"Error: Input file '{input_file}' not found.")

if __name__ == "__main__":
    input_filename = "job_post.txt"
    output_filename = "job_post_filtered.txt"
    extract_keywords(input_filename, output_filename)
    print(f"Keywords extracted from '{input_filename}' and written to '{output_filename}'.")