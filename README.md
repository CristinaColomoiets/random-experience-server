# SERVER

 EXPERIENCE CRUD
 --

| HTTP VERB |             PATH                     |               DESCRIPTION                   |
|-----------|--------------------------------------|---------------------------------------------|
|GET        |'/api/experiences'                    | get all experiences                         |
|GET        |'/api/experience/:experienceId'       | get one experience                          |
|GET        |'/api/experience/random/:experienceID'| get one random experience                   |
|POST       |'/api/experiences'                    | add new experience                          |
|PUT        |'/api/experience/:experienceId'       | edit one experience                         |
|DELETE     |'/api/experience/:experienceId'       | delete one experience                       |


PACKAGE CRUD (2º)
--

| HTTP VERB |             PATH            |               DESCRIPTION                   |
|-----------|-----------------------------|---------------------------------------------|
|GET        |'/api/packages'              | get all packages                            |
|GET        |'/api/package/:packageId'    | get one package                             |
|POST       |'/api/packages'              | add new package                             |
|PUT        |'/api/package/:packageId'    | edit one package                            |
|DELETE     |'/api/package/:packageId'    | delete one package                          |


AUTH
--

| HTTP VERB |             PATH            |               DESCRIPTION                   |
|-----------|-----------------------------|---------------------------------------------|
|POST       |'/api/signup'                | singup user                                 |
|GET        |'/api/login'                 | login user                                  |
|POST       |'/api/verify'                | verify user                                 |

