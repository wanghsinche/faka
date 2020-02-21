(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{4795:function(e,t,r){var s=r("23e7"),a=r("da84"),n=r("b39a"),o=[].slice,l=/MSIE .\./.test(n),u=function(e){return function(t,r){var s=arguments.length>2,a=s?o.call(arguments,2):void 0;return e(s?function(){("function"==typeof t?t:Function(t)).apply(this,a)}:t,r)}};s({global:!0,bind:!0,forced:l},{setTimeout:u(a.setTimeout),setInterval:u(a.setInterval)})},"6e34":function(e,t,r){"use strict";var s=r("7e7b"),a=r.n(s);a.a},"7e7b":function(e,t,r){},a55b:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login-container"},[r("el-card",{staticClass:"login-card",attrs:{header:"请先登录"}},[r("el-form",{attrs:{"label-width":"auto"},nativeOn:{submit:function(t){return t.preventDefault(),e.login(t)}}},[r("el-form-item",{attrs:{label:"用户名"}},[r("el-input",{model:{value:e.model.username,callback:function(t){e.$set(e.model,"username",t)},expression:"model.username"}})],1),r("el-form-item",{attrs:{label:"密码"}},[r("el-input",{attrs:{type:"password"},model:{value:e.model.password,callback:function(t){e.$set(e.model,"password",t)},expression:"model.password"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("登录")]),r("el-button",{attrs:{type:"text"},on:{click:function(t){return e.$router.push("/reg")}}},[e._v("没有帐号,去注册")])],1)],1)],1)],1)},a=[],n=(r("d3b7"),r("96cf"),{data:function(){return{model:{}}},methods:{login:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:if(this.model.username&&this.model.password){t.next=3;break}return this.$message({type:"error",message:"用户名及密码 不能为空！"}),t.abrupt("return",!1);case 3:if(/^[a-z][0-9a-z_]{5,14}$/.test(this.model.username)){t.next=6;break}return this.$message({type:"error",message:"用户名为：字母开头,6-15位字母及数字_"}),t.abrupt("return",!1);case 6:return t.next=8,regeneratorRuntime.awrap(this.$http.post("/admin/call/login",this.model));case 8:e=t.sent,localStorage.token=e.data.token,this.$router.push("/"),this.$message({type:"success",message:"登录成功"});case 12:case"end":return t.stop()}}),null,this)}}}),o=n,l=(r("d6db"),r("2877")),u=Object(l["a"])(o,s,a,!1,null,null,null);t["default"]=u.exports},b8b8:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"reg-container"},[r("el-card",{staticClass:"reg-card",attrs:{header:"注册页面"}},[r("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,"status-icon":"",rules:e.rules,"label-width":"auto",size:"small"}},[r("el-form-item",{attrs:{label:"用户名",prop:"username"}},[r("el-input",{model:{value:e.ruleForm.username,callback:function(t){e.$set(e.ruleForm,"username",t)},expression:"ruleForm.username"}})],1),r("el-form-item",{attrs:{label:"密码",prop:"password"}},[r("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.ruleForm.password,callback:function(t){e.$set(e.ruleForm,"password",t)},expression:"ruleForm.password"}})],1),r("el-form-item",{attrs:{label:"确认密码",prop:"checkPass"}},[r("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.ruleForm.checkPass,callback:function(t){e.$set(e.ruleForm,"checkPass",t)},expression:"ruleForm.checkPass"}})],1),r("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.ruleForm.email,callback:function(t){e.$set(e.ruleForm,"email",t)},expression:"ruleForm.email"}})],1),r("el-form-item",{attrs:{label:"手机",prop:"phone_num"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.ruleForm.phone_num,callback:function(t){e.$set(e.ruleForm,"phone_num",t)},expression:"ruleForm.phone_num"}})],1),r("el-form-item",{attrs:{label:"短信验证码",prop:"sms_num"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.ruleForm.sms_num,callback:function(t){e.$set(e.ruleForm,"sms_num",t)},expression:"ruleForm.sms_num"}}),r("el-button",{attrs:{type:"info",size:"mini"},on:{click:e.get_sms}},[e._v("获取短信验证码")])],1),r("el-form-item",[r("el-button",{attrs:{type:"danger"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v("注册")]),r("el-button",{attrs:{type:"text"},on:{click:function(t){return e.$router.push("/login")}}},[e._v("已有帐号,去登陆")])],1)],1)],1)],1)},a=[],n=(r("d3b7"),r("4795"),r("96cf"),{data:function(){var e=this,t=function(e,t,r){if(!t)return r(new Error("用户名不能为空"));setTimeout((function(){/^[a-z][0-9a-z_]{5,14}$/.test(t)?r():r(new Error("字母开头,6-15位数字及小写字母"))}),600)},r=function(t,r,s){r?(""!==e.ruleForm.checkPass&&e.$refs.ruleForm.validateField("checkPass"),s()):s(new Error("请输入密码"))},s=function(e,t,r){t?/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(t)||r(new Error("邮箱格式不正确")):r(new Error("请输入邮箱")),r()},a=function(e,t,r){t||r(new Error("请输入手机号")),/^1\d{10,10}$/.test(t)||r(new Error("手机号格式错误")),r()},n=function(e,t,r){t||r(new Error("请输入短信验证码")),/^\d{4}$/.test(t)||r(new Error("验证码为4位数字")),r()},o=function(t,r,s){""===r?s(new Error("请再次输入密码")):r!==e.ruleForm.password?s(new Error("两次输入密码不一致!")):s()};return{ruleForm:{},rules:{password:[{validator:r,trigger:"blur"}],checkPass:[{validator:o,trigger:"blur"}],username:[{validator:t,trigger:"blur"}],email:[{validator:s,trigger:"blur"}],phone_num:[{validator:a,trigger:"blur"}],sms_num:[{validator:n,trigger:"blur"}]}}},methods:{reg:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.$http.post("admin/api/reg",this.model));case 2:e=t.sent,localStorage.token=e.data.token,this.$router.push("/"),this.$message({type:"success",message:"登录成功"});case 6:case"end":return t.stop()}}),null,this)},get_sms:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:if(!/^\d{11}$/.test(this.ruleForm.phone_num)){t.next=8;break}return t.next=3,regeneratorRuntime.awrap(this.$http.post("/admin/call/get_sms",{phone_num:this.ruleForm.phone_num}));case 3:e=t.sent,console.log(e.data),e.data&&"OK"===e.data.Message?this.$message({type:"success",message:"验证码发送成功，请查看并输入"}):this.$message({type:"error",message:"验证码获取失败:"+e.data.Message}),t.next=9;break;case 8:this.$message({type:"error",message:"请输入11位手机号码"});case 9:case"end":return t.stop()}}),null,this)},submitForm:function(e){var t=this;this.$refs[e].validate((function(e){var r;return regeneratorRuntime.async((function(s){while(1)switch(s.prev=s.next){case 0:if(!e){s.next=8;break}return console.log(t.ruleForm),s.next=4,regeneratorRuntime.awrap(t.$http.post("/admin/call/reg",t.ruleForm));case 4:r=s.sent,"ok"===r.data.message?(t.$message({message:"注册成功",type:"success"}),t.$router.push("/login")):t.$message({message:"注册失败",type:"error"}),s.next=9;break;case 8:return s.abrupt("return",!1);case 9:case"end":return s.stop()}}))}))},resetForm:function(e){this.$refs[e].resetFields()}}}),o=n,l=(r("6e34"),r("2877")),u=Object(l["a"])(o,s,a,!1,null,null,null);t["default"]=u.exports},d6db:function(e,t,r){"use strict";var s=r("e67a"),a=r.n(s);a.a},e67a:function(e,t,r){}}]);