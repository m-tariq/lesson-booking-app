"use strict";(self["webpackChunklesson_booking_app"]=self["webpackChunklesson_booking_app"]||[]).push([[283],{3283:function(e,a,t){t.r(a),t.d(a,{default:function(){return d}});var o=t(6768),n=t(5130);const l={class:"checkout"},r={class:"form-group"},u={class:"form-group"},s=["disabled"];function i(e,a,t,i,m,p){return(0,o.uX)(),(0,o.CE)("div",l,[a[7]||(a[7]=(0,o.Lk)("h2",null,"Checkout",-1)),(0,o.Lk)("form",{onSubmit:a[4]||(a[4]=(0,n.D$)(((...e)=>p.processCheckout&&p.processCheckout(...e)),["prevent"])),class:"checkout-form"},[(0,o.Lk)("div",r,[a[5]||(a[5]=(0,o.Lk)("label",null,"Name:",-1)),(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":a[0]||(a[0]=e=>m.formData.name=e),type:"text",required:"",onInput:a[1]||(a[1]=(...e)=>p.validateName&&p.validateName(...e))},null,544),[[n.Jo,m.formData.name]])]),(0,o.Lk)("div",u,[a[6]||(a[6]=(0,o.Lk)("label",null,"Phone:",-1)),(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":a[2]||(a[2]=e=>m.formData.phone=e),type:"tel",required:"",onInput:a[3]||(a[3]=(...e)=>p.validatePhone&&p.validatePhone(...e))},null,544),[[n.Jo,m.formData.phone]])]),(0,o.Lk)("button",{type:"submit",disabled:!p.isFormValid,class:"submit-btn"}," Complete Order ",8,s)],32)])}var m={name:"Checkout",data(){return{formData:{name:"",phone:""}}},computed:{isFormValid(){return this.formData.name&&this.formData.phone}},methods:{validateName(e){e.target.value=e.target.value.replace(/[^A-Za-z\s]/g,"")},validatePhone(e){e.target.value=e.target.value.replace(/[^0-9]/g,"")},async processCheckout(){}}},p=t(1241);const c=(0,p.A)(m,[["render",i]]);var d=c}}]);
//# sourceMappingURL=283.91e3792b.js.map