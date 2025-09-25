import { gql } from '@apollo/client';

export const CreateJobDreamfox = gql`
  mutation CreateCareerFormVDC(
    $fullName: String!
    $email: String!
    $phoneNumber: String!
    $attached_file: String!
    $message: String
    $yearsOfExperience: YearsOfExperience
    $jobApplied: String
    $source: CareerFormSource!
  ) {
    createCareerFormVDC(
      input: {
        fullName: $fullName
        email: $email
        phoneNumber: $phoneNumber
        attached_file: $attached_file
        message: $message
        yearsOfExperience: $yearsOfExperience
        jobApplied: $jobApplied
        source: $source
      }
    ) {
      id
      fullName
      email
      phoneNumber
      attached_file
      message
      yearsOfExperience
      jobApplied
      source
    }
  }
`;