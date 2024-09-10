def read_keywords(filename):
    with open(filename, 'r') as file:
        return set(word.strip().lower() for word in file.readlines())


def calculate_score(resume_keywords, job_keywords):
    matching_keywords = resume_keywords.intersection(job_keywords)
    total_job_keywords = len(job_keywords)

    if total_job_keywords == 0:
        return 0

    score = (len(matching_keywords) / total_job_keywords) * 100
    return min(round(score, 2), 100)


def main():
    resume_keywords = read_keywords('resume_filtered.txt')
    job_keywords = read_keywords('job_post_filtered.txt')

    score = calculate_score(resume_keywords, job_keywords)

    print(f"Candidate suitability score: {score}")
    print(f"Matching keywords: {', '.join(resume_keywords.intersection(job_keywords))}")


if __name__ == "__main__":
    main()