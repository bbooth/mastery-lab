define("mastery-lab/adapters/application",["ember-data","exports"],function(e,t){"use strict";var n=e["default"];t["default"]=n.FixtureAdapter.extend({})}),define("mastery-lab/app",["ember","ember/resolver","ember/load-initializers","mastery-lab/config/environment","exports"],function(e,t,n,a,s){"use strict";var r=e["default"],o=t["default"],l=n["default"],i=a["default"];r.MODEL_FACTORY_INJECTIONS=!0;var u=r.Application.extend({modulePrefix:i.modulePrefix,podModulePrefix:i.podModulePrefix,Resolver:o});l(u,i.modulePrefix),s["default"]=u}),define("mastery-lab/controllers/attendee",["ember","exports"],function(e,t){"use strict";var n=e["default"];t["default"]=n.ObjectController.extend({needs:"meeting",meeting:n.computed.alias("controllers.meeting"),actions:{deleteAttendee:function(){var e=this.get("model");e.deleteRecord(),this.get("meeting").deletedAttendees.pushObject(e)}}})}),define("mastery-lab/controllers/meeting",["ember","exports"],function(e,t){"use strict";var n=e["default"];t["default"]=n.ObjectController.extend({actions:{editMeeting:function(){this.set("isEditing",!0)},cancelEdit:function(){var e=this.get("model");e.rollback(),this.get("deletedAttendees").forEach(function(e){e.rollback()}),this.set("isEditing",!1)},addAttendee:function(){console.log("add");var e=this.get("selectedPerson"),t=this.get("model");if(e&&t){var n=this.store.createRecord("attendee",{person:e,meeting:t});n.save()}},save:function(){this.set("isEditing",!1),this.get("deletedAttendees").forEach(function(e){e.save()}),this.get("model").save()}},deletedAttendees:n.A(),isEditing:!1,cost:function(){var e=0,t=0,n=this.get("model"),a=this.get("model.attendees"),s=parseInt(n.get("duration"));return console.log(s),a.forEach(function(n){var a=n.get("person"),s=parseFloat(a.get("wagePerHour"));e+=s,t++}),e/t*s/60}.property("model.attendees.@each.person.wagePerHour")})}),define("mastery-lab/controllers/meetings",["ember","exports"],function(e,t){"use strict";var n=e["default"];t["default"]=n.Controller.extend({actions:{createMeeting:function(){var e=this.get("newTitle");if(e.trim()){var t=this.store.createRecord("meeting",{title:e,duration:"60"});this.set("newTitle",""),t.save()}}}})}),define("mastery-lab/initializers/export-application-global",["ember","mastery-lab/config/environment","exports"],function(e,t,n){"use strict";function a(e,t){var n=s.String.classify(r.modulePrefix);r.exportApplicationGlobal&&(window[n]=t)}var s=e["default"],r=t["default"];n.initialize=a,n["default"]={name:"export-application-global",initialize:a}}),define("mastery-lab/models/attendee",["ember-data","exports"],function(e,t){"use strict";var n=e["default"],a=n.Model.extend({meeting:n.belongsTo("meeting",{async:!0}),person:n.belongsTo("person",{async:!0})});a.reopenClass({FIXTURES:[{id:1,meeting:1,person:1},{id:2,meeting:1,person:2},{id:3,meeting:1,person:3},{id:4,meeting:1,person:4},{id:5,meeting:1,person:5},{id:6,meeting:2,person:4},{id:7,meeting:2,person:5}]}),t["default"]=a}),define("mastery-lab/models/meeting",["ember-data","exports"],function(e,t){"use strict";var n=e["default"],a=n.Model.extend({title:n.attr("string"),duration:n.attr("number"),attendees:n.hasMany("attendee",{async:!0})});a.reopenClass({FIXTURES:[{id:1,title:"Mastery Lab - iOS",duration:"120",attendees:[1,2,3,4,5]},{id:2,title:"Mastery Lab - Ember",duration:"30",attendees:[6,7]}]}),t["default"]=a}),define("mastery-lab/models/person",["ember-data","exports"],function(e,t){"use strict";var n=e["default"],a=n.Model.extend({name:n.attr("string"),wagePerHour:n.attr("number"),attendees:n.hasMany("attendee",{async:!0})});a.reopenClass({FIXTURES:[{id:1,name:"The Mighty Chewbacca",wagePerHour:"225.00",attendees:[1]},{id:2,name:"Han Solo",wagePerHour:"115.00",attendees:[2]},{id:3,name:"Master Yoda",wagePerHour:"500.00",attendees:[3]},{id:4,name:"Luke Skywalker",wagePerHour:"50.00",attendees:[4,6]},{id:5,name:"Leia Organa",wagePerHour:"750.00",attendees:[5,7]}]}),t["default"]=a}),define("mastery-lab/router",["ember","mastery-lab/config/environment","exports"],function(e,t,n){"use strict";var a=e["default"],s=t["default"],r=a.Router.extend({location:s.locationType});r.map(function(){this.resource("meetings",function(){}),this.resource("people",function(){})}),n["default"]=r}),define("mastery-lab/routes/meetings",["ember","exports"],function(e,t){"use strict";var n=e["default"];t["default"]=n.Route.extend({model:function(){return n.RSVP.hash({meetings:this.store.find("meeting"),people:this.store.find("person")})}})}),define("mastery-lab/routes/people",["ember","exports"],function(e,t){"use strict";var n=e["default"];t["default"]=n.Route.extend({model:function(){return this.store.findAll("person")}})}),define("mastery-lab/templates/application",["ember","exports"],function(e,t){"use strict";var n=e["default"];t["default"]=n.Handlebars.template(function(e,t,a,s,r){function o(e,t){t.buffer.push('\r\n                <img alt="Ember.js" height="30px" src="assets/images/emberjs-2fdfa9893abb0ef7f9671b256adb2ca0.png">\r\n            ')}function l(e,t){t.buffer.push('<a href="#">People</a>')}function i(e,t){t.buffer.push('<a href="#">Meetings</a>')}this.compilerInfo=[4,">= 1.0.0"],a=this.merge(a,n.Handlebars.helpers),r=r||{};var u,h,p,c="",d=this,f=a.helperMissing;return r.buffer.push('<nav class="navbar navbar-inverse" role="navigation">\r\n    <div class="container">\r\n        <div class="navbar-header">\r\n            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">\r\n                <span class="sr-only">Toggle navigation</span>\r\n                <span class="icon-bar"></span>\r\n                <span class="icon-bar"></span>\r\n                <span class="icon-bar"></span>\r\n            </button>\r\n            '),h=a["link-to"]||t&&t["link-to"],p={hash:{"class":"navbar-brand"},hashTypes:{"class":"STRING"},hashContexts:{"class":t},inverse:d.noop,fn:d.program(1,o,r),contexts:[t],types:["STRING"],data:r},u=h?h.call(t,"index",p):f.call(t,"link-to","index",p),(u||0===u)&&r.buffer.push(u),r.buffer.push('\r\n        </div>\r\n        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">\r\n            <ul class="nav navbar-nav">\r\n                <!-- Placeholder for some nav items -->\r\n                '),h=a["link-to"]||t&&t["link-to"],p={hash:{tagName:"li"},hashTypes:{tagName:"STRING"},hashContexts:{tagName:t},inverse:d.noop,fn:d.program(3,l,r),contexts:[t],types:["STRING"],data:r},u=h?h.call(t,"people",p):f.call(t,"link-to","people",p),(u||0===u)&&r.buffer.push(u),r.buffer.push("\r\n                "),h=a["link-to"]||t&&t["link-to"],p={hash:{tagName:"li"},hashTypes:{tagName:"STRING"},hashContexts:{tagName:t},inverse:d.noop,fn:d.program(5,i,r),contexts:[t],types:["STRING"],data:r},u=h?h.call(t,"meetings",p):f.call(t,"link-to","meetings",p),(u||0===u)&&r.buffer.push(u),r.buffer.push('\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>\r\n\r\n<div class="container">\r\n    '),u=a._triageMustache.call(t,"outlet",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:r}),(u||0===u)&&r.buffer.push(u),r.buffer.push("\r\n</div>"),c})}),define("mastery-lab/templates/index",["ember","exports"],function(e,t){"use strict";var n=e["default"];t["default"]=n.Handlebars.template(function(e,t,a,s,r){function o(e,t){t.buffer.push("Start Meeting")}this.compilerInfo=[4,">= 1.0.0"],a=this.merge(a,n.Handlebars.helpers),r=r||{};var l,i,u,h="",p=this,c=a.helperMissing;return r.buffer.push('<div class="jumbotron">\r\n    <h1>Meeting Cost Calculator</h1>\r\n\r\n    <p>\r\n        This is simple calculator that calculates the cost of a meeting based on each attendee\'s salary\r\n    </p>\r\n\r\n    <p>\r\n        '),i=a["link-to"]||t&&t["link-to"],u={hash:{"class":"btn btn-primary btn-lg",role:"button"},hashTypes:{"class":"STRING",role:"STRING"},hashContexts:{"class":t,role:t},inverse:p.noop,fn:p.program(1,o,r),contexts:[t],types:["STRING"],data:r},l=i?i.call(t,"meetings",u):c.call(t,"link-to","meetings",u),(l||0===l)&&r.buffer.push(l),r.buffer.push("\r\n    </p>\r\n</div>"),h})}),define("mastery-lab/templates/meetings",["ember","exports"],function(e,t){"use strict";var n=e["default"];t["default"]=n.Handlebars.template(function(e,t,a,s,r){function o(e,t){var n,s="";return t.buffer.push("\r\n            <tr>\r\n                "),n=a["if"].call(e,"meeting.isEditing",{hash:{},hashTypes:{},hashContexts:{},inverse:g.program(5,u,t),fn:g.program(2,l,t),contexts:[e],types:["ID"],data:t}),(n||0===n)&&t.buffer.push(n),t.buffer.push("\r\n            </tr>\r\n        "),s}function l(e,t){var n,s,r,o="";return t.buffer.push('\r\n                    <td>\r\n                        <button type="button" class="btn btn-sm btn-success" '),t.buffer.push(b(a.action.call(e,"save",{hash:{on:"click"},hashTypes:{on:"STRING"},hashContexts:{on:e},contexts:[e],types:["STRING"],data:t}))),t.buffer.push('>\r\n                            <span class="glyphicon glyphicon-ok"></span>\r\n                        </button>\r\n                        <button type="button" class="btn btn-sm btn-danger" '),t.buffer.push(b(a.action.call(e,"cancelEdit",{hash:{on:"click"},hashTypes:{on:"STRING"},hashContexts:{on:e},contexts:[e],types:["STRING"],data:t}))),t.buffer.push('>\r\n                            <span class="glyphicon glyphicon-remove"></span>\r\n                        </button>\r\n                    </td>\r\n                    <td>\r\n                        '),t.buffer.push(b((s=a.input||e&&e.input,r={hash:{"class":"form-control",type:"text",id:"edit-title",value:"meeting.title"},hashTypes:{"class":"STRING",type:"STRING",id:"STRING",value:"ID"},hashContexts:{"class":e,type:e,id:e,value:e},contexts:[],types:[],data:t},s?s.call(e,r):m.call(e,"input",r)))),t.buffer.push("\r\n                    </td>\r\n                    <td>\r\n                        "),t.buffer.push(b((s=a.input||e&&e.input,r={hash:{"class":"form-control",type:"text",id:"edit-duration",value:"meeting.duration"},hashTypes:{"class":"STRING",type:"STRING",id:"STRING",value:"ID"},hashContexts:{"class":e,type:e,id:e,value:e},contexts:[],types:[],data:t},s?s.call(e,r):m.call(e,"input",r)))),t.buffer.push("\r\n                    </td>\r\n                    <td>\r\n                        <ul>\r\n                            "),n=a.each.call(e,"attendee","in","meeting.attendees",{hash:{itemController:"attendee"},hashTypes:{itemController:"STRING"},hashContexts:{itemController:e},inverse:g.noop,fn:g.program(3,i,t),contexts:[e,e,e],types:["ID","ID","ID"],data:t}),(n||0===n)&&t.buffer.push(n),t.buffer.push('\r\n                        </ul>\r\n\r\n                        <div class="row">\r\n                            <div class="col-xs-10">\r\n                                '),t.buffer.push(b(a.view.call(e,"select",{hash:{"class":"form-control",content:"model.people",optionLabelPath:"content.name",optionValuePath:"content.id",selection:"meeting.selectedPerson"},hashTypes:{"class":"STRING",content:"ID",optionLabelPath:"STRING",optionValuePath:"STRING",selection:"ID"},hashContexts:{"class":e,content:e,optionLabelPath:e,optionValuePath:e,selection:e},contexts:[e],types:["STRING"],data:t}))),t.buffer.push('\r\n                            </div>\r\n                            <div class="col-xs-1">\r\n                                <button class="btn btn-success" type="button" '),t.buffer.push(b(a.action.call(e,"addAttendee",{hash:{},hashTypes:{},hashContexts:{},contexts:[e],types:["STRING"],data:t}))),t.buffer.push('>\r\n                                    <span class="glyphicon glyphicon-plus"></span>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                    </td>\r\n                    <td></td>\r\n                '),o}function i(e,t){var n,s="";return t.buffer.push("\r\n                                <li>\r\n                                    "),n=a._triageMustache.call(e,"attendee.person.name",{hash:{},hashTypes:{},hashContexts:{},contexts:[e],types:["ID"],data:t}),(n||0===n)&&t.buffer.push(n),t.buffer.push('\r\n                                    <a href="#" class="glyphicon glyphicon-remove-circle text-danger" '),t.buffer.push(b(a.action.call(e,"deleteAttendee",{hash:{on:"click"},hashTypes:{on:"STRING"},hashContexts:{on:e},contexts:[e],types:["STRING"],data:t}))),t.buffer.push("></a>\r\n                                </li>\r\n                            "),s}function u(e,t){var n,s="";return t.buffer.push('\r\n                    <td>\r\n                        <button type="button" class="btn btn-sm btn-warning" '),t.buffer.push(b(a.action.call(e,"editMeeting",{hash:{on:"click"},hashTypes:{on:"STRING"},hashContexts:{on:e},contexts:[e],types:["STRING"],data:t}))),t.buffer.push('>\r\n                            <span class="glyphicon glyphicon-pencil"></span>\r\n                        </button>\r\n                    </td>\r\n                    <td>'),n=a._triageMustache.call(e,"meeting.title",{hash:{},hashTypes:{},hashContexts:{},contexts:[e],types:["ID"],data:t}),(n||0===n)&&t.buffer.push(n),t.buffer.push("</td>\r\n                    <td>"),n=a._triageMustache.call(e,"meeting.duration",{hash:{},hashTypes:{},hashContexts:{},contexts:[e],types:["ID"],data:t}),(n||0===n)&&t.buffer.push(n),t.buffer.push("</td>\r\n                    <td>\r\n                        <ul>\r\n                            "),n=a.each.call(e,"attendee","in","meeting.attendees",{hash:{},hashTypes:{},hashContexts:{},inverse:g.noop,fn:g.program(6,h,t),contexts:[e,e,e],types:["ID","ID","ID"],data:t}),(n||0===n)&&t.buffer.push(n),t.buffer.push("\r\n                        </ul>\r\n                    </td>\r\n                    <td>"),n=a._triageMustache.call(e,"meeting.cost",{hash:{},hashTypes:{},hashContexts:{},contexts:[e],types:["ID"],data:t}),(n||0===n)&&t.buffer.push(n),t.buffer.push("</td>\r\n                "),s}function h(e,t){var n,s="";return t.buffer.push("\r\n                                <li>"),n=a._triageMustache.call(e,"attendee.person.name",{hash:{},hashTypes:{},hashContexts:{},contexts:[e],types:["ID"],data:t}),(n||0===n)&&t.buffer.push(n),t.buffer.push("</li>\r\n                            "),s}this.compilerInfo=[4,">= 1.0.0"],a=this.merge(a,n.Handlebars.helpers),r=r||{};var p,c,d,f="",b=this.escapeExpression,m=a.helperMissing,g=this;return r.buffer.push('<div class="panel panel-default">\r\n    <div class="panel-heading">\r\n        <h1>\r\n            Meetings\r\n        </h1>\r\n\r\n        <form '),r.buffer.push(b(a.action.call(t,"createMeeting",{hash:{on:"submit"},hashTypes:{on:"STRING"},hashContexts:{on:t},contexts:[t],types:["STRING"],data:r}))),r.buffer.push('>\r\n            <div class="input-group">\r\n                '),r.buffer.push(b((c=a.input||t&&t.input,d={hash:{"class":"form-control",type:"text",id:"create-meeting",placeholder:"meeting name",value:"newTitle"},hashTypes:{"class":"STRING",type:"STRING",id:"STRING",placeholder:"STRING",value:"ID"},hashContexts:{"class":t,type:t,id:t,placeholder:t,value:t},contexts:[],types:[],data:r},c?c.call(t,d):m.call(t,"input",d)))),r.buffer.push('\r\n                <span class="input-group-btn">\r\n                <button class="btn btn-success" type="submit">Create</button>\r\n            </span>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <table class="table">\r\n        <tr>\r\n            <th></th>\r\n            <th>Title</th>\r\n            <th>Duration</th>\r\n            <th>Attendees</th>\r\n            <th>Cost</th>\r\n        </tr>\r\n        '),p=a.each.call(t,"meeting","in","model.meetings",{hash:{itemController:"meeting"},hashTypes:{itemController:"STRING"},hashContexts:{itemController:t},inverse:g.noop,fn:g.program(1,o,r),contexts:[t,t,t],types:["ID","ID","ID"],data:r}),(p||0===p)&&r.buffer.push(p),r.buffer.push("\r\n    </table>\r\n</div>"),f})}),define("mastery-lab/templates/people",["ember","exports"],function(e,t){"use strict";var n=e["default"];t["default"]=n.Handlebars.template(function(e,t,a,s,r){function o(e,t){var n,s="";return t.buffer.push("\r\n            <tr>\r\n                <td>"),n=a._triageMustache.call(e,"person.name",{hash:{},hashTypes:{},hashContexts:{},contexts:[e],types:["ID"],data:t}),(n||0===n)&&t.buffer.push(n),t.buffer.push("</td>\r\n                <td>"),n=a._triageMustache.call(e,"person.wagePerHour",{hash:{},hashTypes:{},hashContexts:{},contexts:[e],types:["ID"],data:t}),(n||0===n)&&t.buffer.push(n),t.buffer.push("</td>\r\n            </tr>\r\n        "),s}this.compilerInfo=[4,">= 1.0.0"],a=this.merge(a,n.Handlebars.helpers),r=r||{};var l,i="",u=this;return r.buffer.push('<div class="panel panel-default">\r\n    <div class="panel-heading">\r\n        <h1>\r\n            People\r\n        </h1>\r\n    </div>\r\n    <table class="table">\r\n        <tr>\r\n            <th>Name</th>\r\n            <th>Wage / hr</th>\r\n        </tr>\r\n        '),l=a.each.call(t,"person","in","model",{hash:{},hashTypes:{},hashContexts:{},inverse:u.noop,fn:u.program(1,o,r),contexts:[t,t,t],types:["ID","ID","ID"],data:r}),(l||0===l)&&r.buffer.push(l),r.buffer.push("\r\n    </table>\r\n</div>"),i})}),define("mastery-lab/config/environment",["ember"],function(e){var t="mastery-lab";try{var n=t+"/config/environment",a=e["default"].$('meta[name="'+n+'"]').attr("content"),s=JSON.parse(unescape(a));return{"default":s}}catch(r){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests?require("mastery-lab/tests/test-helper"):require("mastery-lab/app")["default"].create({});