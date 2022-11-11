import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import AccountService from "../services/account.service";

export const reportIssueAsync = createAsyncThunk(
  "accounts/reportIssue",
  async (values, { rejectWithValue }) => {
    try {
      const response = await AccountService.reportIssue(values);
      return response;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const addDebitCardAsync = createAsyncThunk(
  "accounts/addDebitCard",
  async (values, { rejectWithValue }) => {
    try {
      const response = await AccountService.addDebitCard(values);
      return response;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  reportIssueLoading: false,
  addDebitCardLoading: false,
};

export const accountsSlice = createSlice({
  name: "accounts",
  initialState,
  extraReducers: {
    [reportIssueAsync.pending]: (state) => {
      state.reportIssueLoading = true;
    },
    [reportIssueAsync.fulfilled]: (state) => {
      state.reportIssueLoading = false;
    },
    [reportIssueAsync.rejected]: (state) => {
      state.reportIssueLoading = false;
    },
    [addDebitCardAsync.pending]: (state) => {
      state.addDebitCardLoading = true;
    },
    [addDebitCardAsync.fulfilled]: (state) => {
      state.addDebitCardLoading = false;
    },
    [addDebitCardAsync.rejected]: (state) => {
      state.addDebitCardLoading = false;
    },
  },
});

// Action creators are generated for each case reducer function
const { reducer } = accountsSlice;
export default reducer;

// kyc payload
// {
//   "status": true,
//   "message": "Successful",
//   "user": {
//       "customer_data": {
//           "Date_Created": "2021-05-25 10:21:10",
//           "ID": "803",
//           "CustomerID": "20210500067",
//           "Surname": "EKE ",
//           "Middlename": "SIMON",
//           "Firstname": "CHRISTIANA",
//           "MaritalStatus": "Married",
//           "DOB": "1977-12-28",
//           "Gender": "Female",
//           "Education": "University",
//           "Mobile": "08022868863",
//           "Email": "simon_christiana@yahoo.com",
//           "Home": "15, BRIGHT BEN,GREENVILLE ESTATE,BADORE,AJAH,LAGOS.",
//           "Home_Landmark": "",
//           "Home_State": "025",
//           "Home_LGA": "",
//           "Home_duration": "23",
//           "Home_Previous": "",
//           "Period_Employed": null,
//           "No_of_Children": "4",
//           "No_of_household": null,
//           "Accommodation": null,
//           "Other_Loans": null,
//           "Other_Monthly_Repayments": null,
//           "Notes": "",
//           "Referrer": "gift.anozie",
//           "AccountType": "Personal",
//           "BVN": "22149904142"
//       },
//       "account_officer": {
//           "Username": "Gift Anozie",
//           "Mobile": "07063475759",
//           "Email": "gift.anozie@capival.com"
//       },
//       "employment_data": {
//           "Employment_Status": "Employed",
//           "Employer": "TEDDIE BRINKLET (MOBILE HOUSE)",
//           "Employer_Email": "",
//           "Employer_Address": "MOBILE HOUSE,LEKKI-EPE EXPRESSWAY\r\n",
//           "Employer_Bus-Stop": null,
//           "Employer_Landmark": "MOBIL FILLING STATION",
//           "Employer_City": null,
//           "Employer_State": null,
//           "Employer_LGA": null,
//           "Employer_Phone": "08022868863",
//           "Employer_Staff_ID": "LOS-68863",
//           "Employer_Sector": "Oil and Gas",
//           "Employer_Duration": null,
//           "Pension_No": null,
//           "Tax_ID": null,
//           "Net_Monthly_Income": "120000.00",
//           "Other_Monthly_Income": null,
//           "Total_Disposable_Income": null
//       },
//       "virtual_account": null,
//       "next_of_kin": {
//           "NOK_Name": "Folasayo",
//           "NOK_Relationship": "Sister",
//           "NOK_Employer": null,
//           "NOK_Address": "Alexendaria Terrace Three",
//           "NOK_Phone": "08139500243",
//           "NOK_Email": "fola@test.com"
//       },
//       "bank_account": {
//           "Account_Name": "AKINYOSOYE FOLASAYO OLUWASEYI",
//           "Account_Number": "0136201464",
//           "Bank_Name": "000013",
//           "Branch_SortCode": null,
//           "AccountType": "savings"
//       },
//       "accounts": {
//           "AccountNo": "1010008027",
//           "cod_prod_desc": "Capival Flex",
//           "AccountBalance": "75991.02",
//           "AccountTitle": "EKE  SIMON CHRISTIANA",
//           "OverdraftLimit": "0.00"
//       }
//   },
//   "authorisation": {
//       "user_data": {
//           "id": 1,
//           "customer_id": "20210500067",
//           "email": "simon_christiana@yahoo.com",
//           "email_verified_at": null,
//           "passport": "https://ibankcapival.s3.us-east-2.amazonaws.com/passport/20220700038-1658573489.jpeg",
//           "fcm_token": null,
//           "deleted_at": null,
//           "created_at": "2022-07-23T10:51:29.000000Z",
//           "updated_at": "2022-10-20T08:25:12.000000Z",
//           "trans_pin": {
//               "id": 13,
//               "user_id": 1,
//               "pin": "$2y$10$dSlyF0Aydi6b8UrtjG3MGeu/8nbB1Y24q1bqcdd3lKWg.P.Vsk97S",
//               "deleted_at": null,
//               "created_at": "2022-10-06T12:11:41.000000Z",
//               "updated_at": "2022-10-06T12:11:41.000000Z"
//           },
//           "kyc_doc": {
//               "id": 3,
//               "user_id": 1,
//               "govt_id_front": "https://ibankcapival.s3.us-east-2.amazonaws.com/kycDocument/govtId/20220700038-166176462369571927.jpeg",
//               "govt_id_back": "https://ibankcapival.s3.us-east-2.amazonaws.com/kycDocument/govtId/20220700038-166176462369571927.jpeg",
//               "work_id_front": "https://ibankcapival.s3.us-east-2.amazonaws.com/kycDocument/workId/20220700038-166176462269571927.jpeg",
//               "work_id_back": "https://ibankcapival.s3.us-east-2.amazonaws.com/kycDocument/workId/20220700038-166176462369571927.jpeg",
//               "deleted_at": null,
//               "created_at": "2022-08-29T09:17:03.000000Z",
//               "updated_at": "2022-08-29T09:17:03.000000Z"
//           }
//       },
//       "trans_pin": true,
//       "employer_details": false,
//       "next_of_kin": true,
//       "bank_account": true,
//       "kyc_document": true,
//       "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2RlbW8taWJhbmsuY2FwaXZhbC5jb20vYXBpL3YxL2F1dGgvbG9naW4iLCJpYXQiOjE2NjgxNjY1NTMsImV4cCI6MTY2ODE3MDE1MywibmJmIjoxNjY4MTY2NTUzLCJqdGkiOiJhb3gwY2tKTzVIdHI4NVJXIiwic3ViIjoiMSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.qT-FpmSWoJljFZ545kaVvYDqOcECgEGIFXgQ_ujmzrY",
//       "token_type": "bearer",
//       "expires_in": 3600
//   }
// }
