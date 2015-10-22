API Document :: AwardOfToday

/auth
============================

/auth/login - User Login.
* Success : sends User Database, set isLogin = true
* Failure : HTTP 401

/auth/logout - User logout
* Success : "정상적으로 로그아웃되었습니다.", set isLogin = false
* Failure : HTTP 401

/auth/loginValidate - Validate Login
* Success : HTTP 200
* Failure : HTTP 401

/auth/register - Registers user
* Success : HTTP 200
* Failure : HTTP 409 (UserID Conflict)

/child
=============================

/child/checkMyParent - Checks Child's Parent
* Success : sends Parent Database
* Failure : HTTP 422

/parent
=============================

/parent/findChild - finds Child's User Database
* Success : sends Child's name and apikey
* Failure : HTTP 401

/parent/registerChild - set Each Others' Database to Child and Parent
* Success : sends Child's Database
* Failure : HTTP 401
