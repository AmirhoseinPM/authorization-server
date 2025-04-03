OAUTH2 AuthorizationServer:
grant_types:
  1. client_credentials:
     request:
             curl --location 'http://localhost:8080/oauth2/token' \
              --header 'Content-Type: application/x-www-form-urlencoded' \
              --header 'Authorization: Basic Y2xpZW50OnNlY3JldA==' \
              --header 'Cookie: JSESSIONID=7407BF76F51A62CEC6EF9EFD0BD608B1' \
              --data-urlencode 'grant_type=client_credentials' \
              --data-urlencode 'scope=read'
     response:
             {
                  "access_token": "eyJraWQiOiIxYzQwN2VmMy0zYzhlLTRmYmMtYjcyNi0xMjEwMmI1NmY0MDUiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJjbGllbnQiLCJhdWQiOiJjbGllbnQiLCJuYmYiOjE3NDM2NDE3NjQsInNjb3BlIjpbInJlYWQiXSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwIiwiZXhwIjoxNzQzNjQyMDY0LCJpYXQiOjE3NDM2NDE3NjQsImp0aSI6IjQ1ZTE2OTk1LWJiMzUtNDRiNC04NDQwLTY2Nzg2YzQ2MmEyZiJ9.GVbuxiBErc-9xowMu2ClVS4fiwJWWRyTfGEUqYRvKWg4Zodq4o-WpdUF3bJdAWvrivtRViQrfrFmjJ0dImnbQZIvqIhVEgIaChbV4y_BM4ZEcOqtoMfdtK_GwCm6PnPoaxPjpA8CiEmOFQivSmf5oai7UqHdBC75Ah_euBhy9B2y2QGi4IA343Sj_M2L4xXVTf8zyXVt0m50pqAivaymnAJxdnmcZA1CTmYPge7_miFXjeR9aETbBqFo__XGqL2FPwFG9Hp_QE-unby5u8jJ3veZstPeKZ2RufNlPBDUL-SaIA2DHDDechLCCIsc4AK18m7Xk2B-jN8MWwF2hs4lqA",
                  "scope": "read",
                  "token_type": "Bearer",
                  "expires_in": 299
              }
  2. authorization_code:
       code:
           request:
             http://localhost:8080/oauth2/authorize?response_type=code&client_id=auth-code-client&scope=read&redirect_uri=http://127.0.0.1:8080/login/oauth2/code/auth-code-client&code_challenge=oKq4meAb86nsEJzlFul9V7-iHB3-w5lGtnLFfunnfug&code_challenge_method=S256
           response:
             http://127.0.0.1:8080/login/oauth2/code/auth-code-client?code=usSdHHKORKavmsbv0V49YQx5o6MNZU8ZPNli45IeutYM-8XTzwMXJ_Sq0Ohto9ZHm7WigV9xrePwueJXuP9oE56z1Ze_234g_fQ-vPeGY9oPKjVlXi7GH_cxjDBH15c-
       token:
           request:
             curl --location 'http://localhost:8080/oauth2/token' \
              --header 'Content-Type: application/x-www-form-urlencoded' \
              --header 'Authorization: Basic YXV0aC1jb2RlLWNsaWVudDpzZWNyZXQ=' \
              --data-urlencode 'grant_type=authorization_code' \
              --data-urlencode 'code=usSdHHKORKavmsbv0V49YQx5o6MNZU8ZPNli45IeutYM-8XTzwMXJ_Sq0Ohto9ZHm7WigV9xrePwueJXuP9oE56z1Ze_234g_fQ-vPeGY9oPKjVlXi7GH_cxjDBH15c-' \
              --data-urlencode 'redirect_uri=http://127.0.0.1:8080/login/oauth2/code/auth-code-client' \
              --data-urlencode 'scope=read' \
              --data-urlencode 'code_verifier=XaAWFTM8qY0hCHb0TMSJNiNL9Za_k7i2Z1Og3ypCd-789VcscGfTaO4bazEX5yxvUEcKTFDPD-ZdMl-QX8rWPedZWiy31PPXHwXQ1zyTmct4WUKjvh0YbhHkbJ7j80fL'
           response:
             {
                  "access_token": "eyJraWQiOiIxYzQwN2VmMy0zYzhlLTRmYmMtYjcyNi0xMjEwMmI1NmY0MDUiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJ1c2VyIiwiYXVkIjoiYXV0aC1jb2RlLWNsaWVudCIsIm5iZiI6MTc0MzY0MTc1NCwic2NvcGUiOlsicmVhZCJdLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAiLCJleHAiOjE3NDM2NDIwNTQsImlhdCI6MTc0MzY0MTc1NCwianRpIjoiNWVjYWY4ZDUtMGQ4Mi00ZWU2LWJiYjYtYTMzZjhlYzRhZTk5In0.rcDNVDfjIR6TdqFMpPpJIP3biCqp1fVdZfqTsaWYdmFe508uWofYpelDtR4mmGyiY1lb4lKGDnNSPc-CKZMLruk79q09DOXsyl0e-yo6EAOufGS5KegPiYwiWnDeeiTjVsIRT66UeCr4JmbrYYNVua64XqJ3vFPgR2PEouifWg5HeM3gUCidpMqDWeEkZtbeSsX2z6TaH6FWEVC0bUDb1UXXdhiugg17h1Ipum9IGlQF8TfIxIEVpsWDuku2Uy1EcQNTzOqIvDmpymfhlUGD-engameh9kZ-ZeKYuCiJn3vKSdHlBe3kRtwuzj-62K57_wch3wwDY9jVPaZSa6v0jw",
                  "refresh_token": "2eXQ2JzKXqqo20rNN78RE5sVLdFtriOIL7TI4JssW4oh1hQsKwb23zCBYDamDG8HxvBwZlS-zUXdOsHerniAM9EFLzyMiljLXpQTBRBFpncHdm8PouW89XlmP9nDHPSE",
                  "scope": "read",
                  "token_type": "Bearer",
                  "expires_in": 300
              }

     3. refresh_token:
          request:
              curl --location 'http://localhost:8080/oauth2/token' \
              --header 'Content-Type: application/x-www-form-urlencoded' \
              --header 'Authorization: Basic YXV0aC1jb2RlLWNsaWVudDpzZWNyZXQ=' \
              --data-urlencode 'grant_type=refresh_token' \
              --data-urlencode 'refresh_token=2eXQ2JzKXqqo20rNN78RE5sVLdFtriOIL7TI4JssW4oh1hQsKwb23zCBYDamDG8HxvBwZlS-zUXdOsHerniAM9EFLzyMiljLXpQTBRBFpncHdm8PouW89XlmP9nDHPSE'
          response:
              {
                  "access_token": "eyJraWQiOiIxYzQwN2VmMy0zYzhlLTRmYmMtYjcyNi0xMjEwMmI1NmY0MDUiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJ1c2VyIiwiYXVkIjoiYXV0aC1jb2RlLWNsaWVudCIsIm5iZiI6MTc0MzY0MTc1NCwic2NvcGUiOlsicmVhZCJdLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAiLCJleHAiOjE3NDM2NDIwNTQsImlhdCI6MTc0MzY0MTc1NCwianRpIjoiNWVjYWY4ZDUtMGQ4Mi00ZWU2LWJiYjYtYTMzZjhlYzRhZTk5In0.rcDNVDfjIR6TdqFMpPpJIP3biCqp1fVdZfqTsaWYdmFe508uWofYpelDtR4mmGyiY1lb4lKGDnNSPc-CKZMLruk79q09DOXsyl0e-yo6EAOufGS5KegPiYwiWnDeeiTjVsIRT66UeCr4JmbrYYNVua64XqJ3vFPgR2PEouifWg5HeM3gUCidpMqDWeEkZtbeSsX2z6TaH6FWEVC0bUDb1UXXdhiugg17h1Ipum9IGlQF8TfIxIEVpsWDuku2Uy1EcQNTzOqIvDmpymfhlUGD-engameh9kZ-ZeKYuCiJn3vKSdHlBe3kRtwuzj-62K57_wch3wwDY9jVPaZSa6v0jw",
                  "refresh_token": "2eXQ2JzKXqqo20rNN78RE5sVLdFtriOIL7TI4JssW4oh1hQsKwb23zCBYDamDG8HxvBwZlS-zUXdOsHerniAM9EFLzyMiljLXpQTBRBFpncHdm8PouW89XlmP9nDHPSE",
                  "scope": "read",
                  "token_type": "Bearer",
                  "expires_in": 300
              }         
