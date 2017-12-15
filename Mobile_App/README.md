## Initial​ ​thoughts: 

My​ ​initial​ ​plan​ ​for​ ​creating​ ​this​ ​MPC​ ​mobile​ ​application​ ​was​ ​to​ ​use​ ​SPDZ.​ ​This​ ​was largley​ ​motivated​ ​by​ ​my​ ​familiarity​ ​with​ ​Python​ ​and​ ​interest​ ​in​ ​SPDZ​ ​as​ ​a​ ​framework​ ​overall. Ultimately,​ ​after​ ​giving​ ​it​ ​more​ ​thought​ ​and​ ​exploring​ ​potential​ ​options,​ ​it​ ​didn’t​ ​seem​ ​feasible to​ ​integrate​ ​SPDZ​ ​into​ ​the​ ​application​ ​environment​ ​of​ ​XCode,​ ​which​ ​uses​ ​Objective​ ​C​ ​and​ ​Swift


## Final​ ​Decision: 

After​ ​looking​ ​into​ ​alternative​ ​approaches​ ​for​ ​this​ ​project,​ ​I​ ​reached​ ​my​ ​final​ ​decision​ ​to use​ ​Jiff​ ​with​ ​Meteor.​ ​Meteor​ ​is​ ​a​ ​full​ ​stack​ ​Javascript​ ​development​ ​platform.​ ​I​ ​chose​ ​this approach​ ​for​ ​several​ ​reasons.​ ​To​ ​start,​ ​it​ ​seemed​ ​as​ ​though​ ​integrating​ ​Jiff​ ​would​ ​be​ ​relatively simple,​ ​given​ ​that​ ​Jiff​ ​is​ ​written​ ​on​ ​top​ ​of​ ​Javascript.​ ​Secondly,​ ​Meteor​ ​is​ ​built​ ​on​ ​top​ ​of​ ​Node.js which​ ​led​ ​me​ ​to​ ​believe​ ​that​ ​pivoting​ ​from​ ​my​ ​original​ ​isolated​ ​version​ ​of​ ​MPC​ ​using​ ​Node.js​ ​to Meteor​ ​would​ ​also​ ​be​ ​simple.​ ​Lastly,​ ​Meteor​ ​includes​ ​a​ ​version​ ​of​ ​MongoDB​ ​which​ ​would​ ​make creating​ ​user​ ​accounts​ ​quick​ ​and​ ​painless.
