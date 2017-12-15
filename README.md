# DVRSTY
## The​ ​What: 

A​ ​groupware​ ​application​ ​titled​ ​​DVRSTY​​ ​that​ ​is​ ​used​ ​for​ ​polling​ ​the​ ​aggregate​ ​diversity​ ​of specific​ ​groups​ ​of​ ​people​ ​within​ ​a​ ​given​ ​community​ ​​without any​ ​reliance​ ​on​ ​trusting​ ​a​ ​third ​ ​​ party.​ ​DVRSTY​ ​essentially​ ​provides​ ​a​ ​method​ ​for​ ​employees​ ​to​ ​contribute​ ​their​ ​personal information​ ​to​ ​an​ ​overall​ ​statistic​ ​without​ ​their​ ​answers​ ​being​ ​revealed​ ​to​ ​another​ ​party​ ​and without​ ​associating​ ​answers​ ​with​ ​specific​ ​individuals. 

## The​ ​How​ ​(application​ ​scenario): 

Suppose​ ​there​ ​is​ ​a​ ​circumstance​ ​where​ ​some​ ​entity​ ​(employer)​ ​wants​ ​to​ ​privately​ ​poll the​ ​diversity​ ​of​ ​a​ ​particular​ ​group​ ​(employees).​ ​In​ ​this​ ​application,​ ​individuals​ ​within​ ​the​ ​group are​ ​considered​ ​contributors​ ​and​ ​submit​ ​independent​ ​race/ethnicity​ ​information.​ ​The application​ ​outputs​ ​diversity​ ​distribution​ ​to​ ​all​ ​contributors​ ​and​ ​initializing​ ​entity,​ ​but​ ​individual responses​ ​are​ ​not​ ​revealed​ ​to​ ​any​ ​single​ ​party.

## ​Drawbacks​ ​and​ ​Obstacles 

The​ ​biggest​ ​obstacle​ ​that​ ​I​ ​faced​ ​in​ ​developing​ ​this​ ​application​ ​was​ ​that​ ​Meteor​ ​has​ ​a highly​ ​specific​ ​way​ ​of​ ​dealing​ ​with​ ​client/server​ ​communication.​ ​Because​ ​Meteor​ ​is​ ​an opinionated​ ​language,​ ​I​ ​found​ ​that​ ​I​ ​was​ ​wrestling​ ​with​ ​the​ ​languages​ ​functionality​ ​probably more​ ​than​ ​necessary.​ ​Meteor​ ​incorporates​ ​the​ ​usage​ ​of​ ​websockets​ ​in​ ​a​ ​way​ ​that​ ​I​ ​was ultimately​ ​unable​ ​to​ ​fully​ ​understand​ ​or​ ​grasp.​ ​The​ ​problem​ ​I​ ​was​ ​facing​ ​in​ ​the​ ​end​ ​was​ ​that​ ​all of​ ​the​ ​clients​ ​would​ ​connect​ ​to​ ​the​ ​server​ ​but​ ​would​ ​not​ ​maintain​ ​a​ ​connection​ ​for​ ​a​ ​long
enough​ ​period​ ​of​ ​time​ ​for​ ​the​ ​computation​ ​to​ ​begin.​ ​My​ ​assumption​ ​is​ ​that​ ​this​ ​has​ ​to​ ​do​ ​with some​ ​sort​ ​of​ ​session​ ​restriction​ ​in​ ​Meteor​ ​itself


## Project​ ​Submission *Broken​ ​down​ ​into​ ​two​ ​parts 

Part​ ​1​ ​-​ ​A​ ​mobile​ ​application​ ​that​ ​creates​ ​user​ ​profiles​ ​associated​ ​with​ ​unique​ ​generated​ ​codes, stores​ ​the​ ​codes​ ​in​ ​user​ ​profiles,​ ​and​ ​has​ ​the​ ​ability​ ​to​ ​have​ ​several​ ​parties​ ​connect​ ​to​ ​the server​ ​for​ ​a​ ​very​ ​brief​ ​period​ ​of​ ​time.


## Part​ ​2​ ​-​ 

​A​ ​standalone​ ​webpage​ ​running​ ​on​ ​Node.js​ ​that​ ​computes​ ​the​ ​diversity​ ​distribution analysis​ ​on​ ​a​ ​given​ ​number​ ​of​ ​parties​ ​and​ ​outputs​ ​a​ ​graph​ ​of​ ​the​ ​result
