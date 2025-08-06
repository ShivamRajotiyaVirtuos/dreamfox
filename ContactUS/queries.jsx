import { gql } from "@apollo/client";

export const SUBMIT_FORM = gql`
  mutation SubmitForm(
    $firstName: String!
    $lastName: String!
    $company: String
    $email: String!
    $phoneNumber: String
    $message: String
    $formType: String!
    $pageUrl: String
    $designation: String
    $attached_file: String
    $subject: String!
    $country: String
    $city: String
    $address: String
  ) {
    createContactForm(
      createContactFormInput: {
        firstName: $firstName
        lastName: $lastName
        company: $company
        email: $email
        phoneNumber: $phoneNumber
        message: $message
        formType: $formType
        pageUrl: $pageUrl
        designation: $designation
        attached_file: $attached_file
        subject: $subject
        country: $country
        city: $city
        address: $address
      }
    ) {
      id
      firstName
      lastName
      company
      email
      phoneNumber
      message
      formType
      pageUrl
      designation
      attached_file
      subject
      country
      city
      address
      status
      cdate
    }
  }
`;
