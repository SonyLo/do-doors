import{_ as w}from"./AuthenticatedLayout-BB4oSw7V.js";import"./CalcForm-YklUsYCh.js";import{_ as k}from"./MaterialTable-KJ5LhAX3.js";import{o as i,c as r,b as e,d as c,v as m,j as x,f as p,F as h,r as u,e as f,i as U,t as C,a as v,u as V,w as b,Z as M,g as y}from"./app-ClgqYLNi.js";import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./ApplicationLogo-BctaxC8V.js";import"./RalColorSelector-YfqKdBFi.js";import"./Pagination-C7Xg3IfL.js";const F={props:["item"],data(){return{messages:[],uploaded_wrapper_image:[],uploaded_door_image:[],loading:!1,form:{id:null,title:null,need_generate_sizes:!1,wrapper_variants:[],door_variants:[]}}},computed:{needClearForm(){return this.form.id||this.form.title||this.uploaded_wrapper_image.length>0||this.uploaded_door_image.length>0}},mounted(){this.item&&this.$nextTick(()=>{this.form={id:this.item.id||null,title:this.item.title||null,wrapper_variants:this.item.wrapper_variants||[],door_variants:this.item.door_variants||[]}})},methods:{alert(l){this.messages.push(l)},resetForm(){this.uploaded_wrapper_image=[],this.uploaded_door_image=[],this.form.id=null,this.form.title=null,this.form.wrapper_variants=[],this.form.door_variants=[],this.$refs.doorImageRef.value=null,this.$refs.wrapperImageRef.value=null,this.$emit("callback")},removeUploadedPhoto(l,t){this.form[l].splice(t,1)},removePhoto(l,t){this[l].splice(t,1)},getPhoto(l){return{imageUrl:URL.createObjectURL(l)}},onChangePhotos(l,t){const _=t.target.files;for(let g=0;g<_.length;g++)this[l].push({image:_[g],title:null,description:null})},removeMessage(l){this.messages.splice(l,1)},submit(){let l=new FormData;if(Object.keys(this.form).forEach(t=>{const _=this.form[t]||"";typeof _=="object"?l.append(t,JSON.stringify(_)):l.append(t,_)}),this.uploaded_wrapper_image.length>0){for(let t=0;t<this.uploaded_wrapper_image.length;t++)l.append("wrapper_images[]",this.uploaded_wrapper_image[t].image),this.uploaded_wrapper_image[t].image_name=this.uploaded_wrapper_image[t].image.name||null;l.append("wrapper_images_info",JSON.stringify(this.uploaded_wrapper_image))}if(this.uploaded_door_image.length>0){for(let t=0;t<this.uploaded_door_image.length;t++)l.append("door_images[]",this.uploaded_door_image[t].image),this.uploaded_door_image[t].image_name=this.uploaded_door_image[t].image.name||null;l.append("door_images_info",JSON.stringify(this.uploaded_door_image))}this.$store.dispatch("storeMaterial",{materialForm:l}).then(t=>{this.resetForm(),this.$emit("callback")}).catch(t=>{this.alert(t.response.data.message)})}}},P={class:"form-floating mb-3"},T=e("label",{for:"material-title"},"Название материала",-1),I={class:"form-check form-switch"},O=e("label",{class:"form-check-label",for:"recount-by-width"}," Автоматически создать заглушки размеров ",-1),q={class:"form-floating mb-3 border-gray-100 border"},L=e("label",{for:"door-material"},"Текстура материала для двери",-1),N={class:"row"},S={key:0,class:"col-12"},R=e("h6",{class:"font-bold my-3"},"Новые фотографии к материалу",-1),B=[R],z={class:"col-md-4 mb-2 image-preview d-flex align-items-start"},D={class:"card w-100"},J=["src"],E={class:"card-body d-flex justify-center"},Z=["onClick"],A={class:"card-body"},G={class:"form-floating mb-3"},H=["onUpdate:modelValue"],K=e("label",{for:"floatingInput"},"Название",-1),Q={class:"form-floating"},W=["onUpdate:modelValue"],X=e("label",{for:"floatingTextarea"},"Описание",-1),Y={key:1,class:"col-12"},$=e("h6",{class:"font-bold my-3"},"Текущие фотографии к материалу",-1),ee=[$],te={class:"col-md-4 mb-2 image-preview d-flex align-items-start"},oe={class:"card w-100"},se=["src"],ae=["src"],ie={class:"card-body d-flex justify-center"},le=["onClick"],re={class:"card-body"},de={class:"form-floating mb-3"},ne=["onUpdate:modelValue"],ce=e("label",{for:"floatingInput"},"Название",-1),me={class:"form-floating"},_e=["onUpdate:modelValue"],pe=e("label",{for:"floatingTextarea"},"Описание",-1),he={class:"form-floating mb-3 border-gray-100 border"},ue=e("label",{for:"material-wrapper"},"Текстура материала вокруг двери",-1),ge={class:"row"},fe={key:0,class:"col-12"},ve=e("h6",{class:"font-bold my-3"},"Новые фотографии к материалу",-1),be=[ve],ye={class:"col-md-4 mb-2 image-preview d-flex align-items-start"},we={class:"card w-100"},ke=["src"],xe={class:"card-body d-flex justify-center"},Ue=["onClick"],Ce={class:"card-body"},Ve={class:"form-floating mb-3"},Me=["onUpdate:modelValue"],je=e("label",{for:"floatingInput"},"Название",-1),Fe={class:"form-floating"},Pe=["onUpdate:modelValue"],Te=e("label",{for:"floatingTextarea"},"Описание",-1),Ie={key:1,class:"col-12"},Oe=e("h6",{class:"font-bold my-3"},"Текущие фотографии к материалу",-1),qe=[Oe],Le={class:"col-md-4 mb-2 image-preview d-flex align-items-start"},Ne={class:"card w-100"},Se=["src"],Re=["src"],Be={class:"card-body d-flex justify-center"},ze=["onClick"],De={class:"card-body"},Je={class:"form-floating mb-3"},Ee=["onUpdate:modelValue"],Ze=e("label",{for:"floatingInput"},"Название",-1),Ae={class:"form-floating"},Ge=["onUpdate:modelValue"],He=e("label",{for:"floatingTextarea"},"Описание",-1),Ke={class:"row"},Qe={class:"col-12"},We={class:"alert alert-danger alert-dismissible fade show",role:"alert"},Xe=e("strong",null,"Внимание!",-1),Ye=["onClick"],$e={class:"row mt-5"},et={class:"col-12 d-flex justify-content-center"},tt=["disabled"],ot={key:0,class:"fa-regular fa-floppy-disk mr-1"},st={key:1,class:"spinner-border spinner-border-sm text-success",role:"status"},at=e("i",{class:"fa-solid fa-xmark mr-1"},null,-1);function it(l,t,_,g,o,n){return i(),r("form",{action:"",onSubmit:t[5]||(t[5]=U((...s)=>n.submit&&n.submit(...s),["prevent"]))},[e("div",P,[c(e("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=s=>o.form.title=s),class:"form-control",id:"material-title",placeholder:"name@example.com",required:""},null,512),[[m,o.form.title]]),T]),e("div",I,[c(e("input",{class:"form-check-input","onUpdate:modelValue":t[1]||(t[1]=s=>o.form.need_generate_sizes=s),type:"checkbox",role:"switch",id:"recount-by-width"},null,512),[[x,o.form.need_generate_sizes]]),O]),e("div",q,[e("input",{type:"file",class:"form-control",accept:"image/*",id:"door-material",ref:"doorImageRef",onChange:t[2]||(t[2]=s=>n.onChangePhotos("uploaded_door_image",s)),placeholder:"name@example.com",multiple:""},null,544),L]),e("div",N,[o.uploaded_door_image.length>0?(i(),r("div",S,B)):p("",!0),(i(!0),r(h,null,u(o.uploaded_door_image,(s,a)=>(i(),r("div",z,[e("div",D,[e("img",{style:{"min-height":"200px"},src:n.getPhoto(s.image).imageUrl,class:"card-img-top uploaded-image-mini",alt:""},null,8,J),e("div",E,[e("a",{href:"javascript:void(0)",class:"text-danger",onClick:d=>n.removePhoto("uploaded_door_image",a)},"Удалить фото",8,Z)]),e("div",A,[e("div",G,[c(e("input",{type:"text","onUpdate:modelValue":d=>o.uploaded_door_image[a].title=d,class:"form-control border-gray-300 rounded-md",id:"floatingInput",required:""},null,8,H),[[m,o.uploaded_door_image[a].title]]),K]),e("div",Q,[c(e("textarea",{class:"form-control","onUpdate:modelValue":d=>o.uploaded_door_image[a].description=d,placeholder:"Leave a comment here",id:"floatingTextarea",required:""},null,8,W),[[m,o.uploaded_door_image[a].description]]),X])])])]))),256)),o.form.door_variants.length>0?(i(),r("div",Y,ee)):p("",!0),(i(!0),r(h,null,u(o.form.door_variants,(s,a)=>(i(),r("div",te,[e("div",oe,[s.image.indexOf("http")===-1?(i(),r("img",{key:0,style:{"min-height":"200px"},src:"/images/"+s.image,class:"card-img-top uploaded-image-mini",alt:""},null,8,se)):(i(),r("img",{key:1,style:{"min-height":"200px"},src:s.image,class:"card-img-top uploaded-image-mini",alt:""},null,8,ae)),e("div",ie,[e("a",{href:"javascript:void(0)",class:"text-danger",onClick:d=>n.removeUploadedPhoto("door_variants",a)},"Удалить",8,le)]),e("div",re,[e("div",de,[c(e("input",{type:"text","onUpdate:modelValue":d=>o.form.door_variants[a].title=d,class:"form-control border-gray-300 rounded-md",id:"floatingInput",required:""},null,8,ne),[[m,o.form.door_variants[a].title]]),ce]),e("div",me,[c(e("textarea",{class:"form-control","onUpdate:modelValue":d=>o.form.door_variants[a].description=d,placeholder:"Leave a comment here",id:"floatingTextarea",required:""},null,8,_e),[[m,o.form.door_variants[a].description]]),pe])])])]))),256))]),e("div",he,[e("input",{type:"file",class:"form-control",id:"material-wrapper",accept:"image/*",ref:"wrapperImageRef",onChange:t[3]||(t[3]=s=>n.onChangePhotos("uploaded_wrapper_image",s)),placeholder:"name@example.com",multiple:""},null,544),ue]),e("div",ge,[o.uploaded_wrapper_image.length>0?(i(),r("div",fe,be)):p("",!0),(i(!0),r(h,null,u(o.uploaded_wrapper_image,(s,a)=>(i(),r("div",ye,[e("div",we,[e("img",{style:{"min-height":"200px"},src:n.getPhoto(s.image).imageUrl,class:"card-img-top uploaded-image-mini",alt:""},null,8,ke),e("div",xe,[e("a",{href:"javascript:void(0)",class:"text-danger",onClick:d=>n.removePhoto("uploaded_wrapper_image",a)},"Удалить фото",8,Ue)]),e("div",Ce,[e("div",Ve,[c(e("input",{type:"text","onUpdate:modelValue":d=>o.uploaded_wrapper_image[a].title=d,class:"form-control border-gray-300 rounded-md",id:"floatingInput"},null,8,Me),[[m,o.uploaded_wrapper_image[a].title]]),je]),e("div",Fe,[c(e("textarea",{class:"form-control","onUpdate:modelValue":d=>o.uploaded_wrapper_image[a].description=d,placeholder:"Leave a comment here",id:"floatingTextarea"},null,8,Pe),[[m,o.uploaded_wrapper_image[a].description]]),Te])])])]))),256)),o.form.wrapper_variants.length>0?(i(),r("div",Ie,qe)):p("",!0),(i(!0),r(h,null,u(o.form.wrapper_variants,(s,a)=>(i(),r("div",Le,[e("div",Ne,[s.image.indexOf("http")===-1?(i(),r("img",{key:0,style:{"min-height":"200px"},src:"/images/"+s.image,class:"card-img-top uploaded-image-mini",alt:""},null,8,Se)):(i(),r("img",{key:1,style:{"min-height":"200px"},src:s.image,class:"card-img-top uploaded-image-mini",alt:""},null,8,Re)),e("div",Be,[e("a",{href:"javascript:void(0)",class:"text-danger",onClick:d=>n.removeUploadedPhoto("wrapper_variants",a)},"Удалить",8,ze)]),e("div",De,[e("div",Je,[c(e("input",{type:"text","onUpdate:modelValue":d=>o.form.wrapper_variants[a].title=d,class:"form-control border-gray-300 rounded-md",id:"floatingInput",required:""},null,8,Ee),[[m,o.form.wrapper_variants[a].title]]),Ze]),e("div",Ae,[c(e("textarea",{class:"form-control","onUpdate:modelValue":d=>o.form.wrapper_variants[a].description=d,placeholder:"Leave a comment here",id:"floatingTextarea",required:""},null,8,Ge),[[m,o.form.wrapper_variants[a].description]]),He])])])]))),256))]),e("div",Ke,[e("div",Qe,[o.messages.length>0?(i(!0),r(h,{key:0},u(o.messages,(s,a)=>(i(),r("div",We,[Xe,f(" "+C(s||"Ошибка")+" ",1),e("button",{type:"button",class:"btn-close",onClick:d=>n.removeMessage(a)},null,8,Ye)]))),256)):p("",!0)])]),e("div",$e,[e("div",et,[e("button",{disabled:!n.needClearForm,class:"btn btn-outline-success rounded-5"},[o.loading?(i(),r("span",st)):(i(),r("i",ot)),f(" Сохранить материал ")],8,tt),n.needClearForm&&!o.loading?(i(),r("button",{key:0,type:"button",onClick:t[4]||(t[4]=(...s)=>n.resetForm&&n.resetForm(...s)),class:"btn btn-outline-danger rounded-5 ml-2"},[at,f(" Очистить форму ")])):p("",!0)])])],32)}const lt=j(F,[["render",it]]),rt=e("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"},"Материалы",-1),dt={class:"py-12"},nt={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},ct={class:"bg-white overflow-hidden shadow-sm sm:rounded-lg"},mt={class:"p-6 text-gray-900"},_t=e("hr",{class:"hr my-5"},null,-1),pt={data(){return{loading:!1,selectedMaterial:null}},methods:{selectMaterial(l){this.selectedMaterial=l,this.loading=!0,this.$nextTick(()=>{this.loading=!1})},callbackMaterialForm(){this.loading=!0,this.selectedMaterial=null,this.$nextTick(()=>{this.loading=!1})}}},kt=Object.assign(pt,{__name:"MaterialsPage",setup(l){return(t,_)=>(i(),r(h,null,[v(V(M),{title:"Материалы"}),v(w,null,{header:b(()=>[rt]),default:b(()=>[e("div",dt,[e("div",nt,[e("div",ct,[e("div",mt,[t.loading?p("",!0):(i(),y(lt,{key:0,item:t.selectedMaterial,onCallback:t.callbackMaterialForm},null,8,["item","onCallback"])),_t,t.loading?p("",!0):(i(),y(k,{key:1,onSelect:t.selectMaterial},null,8,["onSelect"]))])])])])]),_:1})],64))}});export{kt as default};