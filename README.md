# SERVER

 EXPERIENCE CRUD
 --

| HTTP VERB |             PATH                     |               DESCRIPTION                   |
|-----------|--------------------------------------|---------------------------------------------|
|GET        |'/api/experiences/'                    | get all experiences                        |
|GET        |'/api/experiences/:experienceId'       | get one experience                         |
|POST       |'/api/experiences/'                    | add new experience                         |
|PUT        |'/api/experiences/:experienceId'       | edit one experience                        |
|DELETE     |'/api/experiences/:experienceId'       | delete one experience                      |


PACKAGE CRUD (2º)
--

| HTTP VERB |             PATH                |               DESCRIPTION                   |
|-----------|---------------------------------|---------------------------------------------|
|GET        |'/api/packages/'                  | get all packages                           |
|GET        |'/api/packages/:packageId'        | get one package                            |
|POST       |'/api/packages/'                  | add new package                            |
|PUT        |'/api/packages/:packageId'        | edit one package                           |
|DELETE     |'/api/packages/:packageId'        | delete one package                         |


PURCHASE
--

| HTTP VERB |             PATH                |               DESCRIPTION                   |
|-----------|---------------------------------|---------------------------------------------|
|POST       |'/api/purchases/'                | post new purchase                           |
|GET        |'/api/purchases/:purchaseId'     | get one purchase                            |




AUTH
--

| HTTP VERB |             PATH            |               DESCRIPTION                   |
|-----------|-----------------------------|---------------------------------------------|
|POST       |'/api/signup'                | singup user                                 |
|GET        |'/api/login'                 | login user                                  |
|POST       |'/api/verify'                | verify user                                 |


USER
--

| HTTP VERB |             PATH            |               DESCRIPTION                   |
|-----------|-----------------------------|---------------------------------------------|
|GET        |'/api/users/:userId'         |  get user data                              |
|PUT        |'/api/users/:userId'         |  post new user data                         |
|DELETE     |'/api/users/:userId'         |  delete one user data                       |

