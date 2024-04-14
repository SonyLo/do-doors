import{_ as $}from"./AuthenticatedLayout-DKEVbNu6.js";import{m as y,o as l,c as i,b as e,d as h,v as u,e as c,f as n,F as m,r as p,g as f,t as _,n as b,i as k,a as g,u as w,w as v,Z as C}from"./app-n5g1UPt_.js";import{P as H}from"./Pagination-T7_qpnq1.js";import{R as j}from"./RalColorSelector-FyzzFilM.js";import"./ApplicationLogo-CRyn42vh.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const L={class:"row"},U={class:"col-12"},I={class:"input-group mb-3"},V={class:"form-floating"},F=e("label",{for:"search-handles"},"Поиск по ручкам",-1),P=e("i",{class:"fa-solid fa-magnifying-glass"},null,-1),A=[P],S={key:0,class:"table"},M={key:0},O=e("i",{class:"fa-solid fa-caret-down"},null,-1),T=[O],R={key:1},N=e("i",{class:"fa-solid fa-caret-up"},null,-1),q=[N],B={key:0},D=e("i",{class:"fa-solid fa-caret-down"},null,-1),E=[D],J={key:1},z=e("i",{class:"fa-solid fa-caret-up"},null,-1),G=[z],Z={key:0},K=e("i",{class:"fa-solid fa-caret-down"},null,-1),Q=[K],W={key:1},X=e("i",{class:"fa-solid fa-caret-up"},null,-1),Y=[X],x={key:0},ee=e("i",{class:"fa-solid fa-caret-down"},null,-1),te=[ee],se={key:1},oe=e("i",{class:"fa-solid fa-caret-up"},null,-1),le=[oe],ae=e("th",{scope:"col",class:"text-center"},"Варианты ручек",-1),ie={key:0},ne=e("i",{class:"fa-solid fa-caret-down"},null,-1),de=[ne],re={key:1},ce=e("i",{class:"fa-solid fa-caret-up"},null,-1),he=[ce],ue=e("th",{scope:"col",class:"text-center"},"Действие",-1),me={scope:"row"},_e=["onClick"],pe={class:"text-center"},fe={class:"text-center d-flex justify-center"},ge={key:1},ve={class:"text-center"},be={class:"text-center"},$e={class:"text-center"},ye={class:"dropdown"},ke=e("button",{class:"btn btn-link",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},[e("i",{class:"fa-solid fa-bars"})],-1),we={class:"dropdown-menu"},Ce=["onClick"],He=e("i",{class:"fa-solid fa-pen mr-2"},null,-1),je=["onClick"],Le=e("i",{class:"fa-solid fa-trash-can mr-2"},null,-1),Ue={key:1,class:"alert alert-success",role:"alert"},Ie=e("h4",{class:"alert-heading"},"Ручки",-1),Ve=e("p",null,"К сожалению, раздел ручек пуст. Вы еще не добавили ни одной ручки, которые можно отобразить на этой странице.",-1),Fe=e("hr",null,null,-1),Pe=e("p",{class:"mb-0"},"Воспользуйтесь формой выше и добавьте свою первую ручку",-1),Ae=[Ie,Ve,Fe,Pe],Se={key:2,class:"row mb-3"},Me={class:"col-12"},Oe={data(){return{sort:{column:null,direction:"desc"},search:null,current_page:0,paginate_object:null,items:[{id:null,title:null,price:0,variants:[]}]}},computed:{...y(["getHandles","getHandlesPaginateObject"])},mounted(){this.loadHandles()},methods:{sortAndLoad(a){this.sort.column=a,this.sort.direction=this.sort.direction==="desc"?"asc":"desc",this.loadHandles(this.current_page)},loadHandles(a=0){this.current_page=a,this.$store.dispatch("loadHandles",{dataObject:{search:this.search,order:this.sort.column,direction:this.sort.direction},page:this.current_page}).then(t=>{this.items=this.getHandles,this.paginate_object=this.getHandlesPaginateObject}).catch(()=>{this.loading=!1})},selectItem(a){this.$emit("select",a)},duplicateItem(a){this.$store.dispatch("duplicateHandle",{handleId:a}).then(()=>{this.sortAndLoad("id")})},removeItem(a){this.$store.dispatch("removeHandle",{handleId:a}).then(()=>{this.sortAndLoad("id")})}}},Te=Object.assign(Oe,{__name:"HandleTable",setup(a){return(t,o)=>(l(),i(m,null,[e("form",L,[e("div",U,[e("div",I,[e("div",V,[h(e("input",{type:"search","onUpdate:modelValue":o[0]||(o[0]=s=>t.search=s),class:"form-control",id:"search-handles"},null,512),[[u,t.search]]),F]),e("button",{type:"button",onClick:o[1]||(o[1]=s=>t.sortAndLoad("id")),class:"btn btn-outline-primary"},A)])])]),t.items.length>0?(l(),i("table",S,[e("thead",null,[e("tr",null,[e("th",{scope:"col",class:"cursor-pointer",onClick:o[2]||(o[2]=s=>t.sortAndLoad("id"))},[c("# "),t.sort.direction==="desc"&&t.sort.column==="id"?(l(),i("span",M,T)):n("",!0),t.sort.direction==="asc"&&t.sort.column==="id"?(l(),i("span",R,q)):n("",!0)]),e("th",{scope:"col",class:"text-center cursor-pointer",onClick:o[3]||(o[3]=s=>t.sortAndLoad("title"))},[c("Название "),t.sort.direction==="desc"&&t.sort.column==="title"?(l(),i("span",B,E)):n("",!0),t.sort.direction==="asc"&&t.sort.column==="title"?(l(),i("span",J,G)):n("",!0)]),e("th",{scope:"col",class:"text-center cursor-pointer",onClick:o[4]||(o[4]=s=>t.sortAndLoad("price"))},[c("Цена "),t.sort.direction==="desc"&&t.sort.column==="price"?(l(),i("span",Z,Q)):n("",!0),t.sort.direction==="asc"&&t.sort.column==="price"?(l(),i("span",W,Y)):n("",!0)]),e("th",{scope:"col",class:"text-center cursor-pointer",onClick:o[5]||(o[5]=s=>t.sortAndLoad("color"))},[c("Цвет "),t.sort.direction==="desc"&&t.sort.column==="color"?(l(),i("span",x,te)):n("",!0),t.sort.direction==="asc"&&t.sort.column==="color"?(l(),i("span",se,le)):n("",!0)]),ae,e("th",{scope:"col",class:"text-center cursor-pointer",onClick:o[6]||(o[6]=s=>t.sortAndLoad("updated_at"))},[c(" Дата изменения "),t.sort.direction==="desc"&&t.sort.column==="updated_at"?(l(),i("span",ie,de)):n("",!0),t.sort.direction==="asc"&&t.sort.column==="updated_at"?(l(),i("span",re,he)):n("",!0)]),ue])]),e("tbody",null,[(l(!0),i(m,null,p(t.items,(s,d)=>(l(),i("tr",null,[e("th",me,_(s.id||d),1),e("td",{class:"text-center",onClick:r=>t.selectItem(s)},_(s.title||"-"),9,_e),e("td",pe,_(s.price||0),1),e("td",fe,[s.color?(l(),i("span",{key:0,class:"d-block shadow-md",style:b([{"background-color":s.color},{width:"50px",height:"50px"}])},null,4)):(l(),i("span",ge,"Цвет не указан"))]),e("td",ve,_(s.variants.length),1),e("td",be,_(s.updated_at||"-"),1),e("td",$e,[e("div",ye,[ke,e("ul",we,[e("li",null,[e("a",{class:"dropdown-item",onClick:r=>t.selectItem(s),href:"javascript:void(0)"},[He,c("Редактировать")],8,Ce)]),e("li",null,[e("a",{class:"dropdown-item text-danger",onClick:r=>t.removeItem(s.id),href:"javascript:void(0)"},[Le,c("Удалить")],8,je)])])])])]))),256))])])):n("",!0),t.items.length===0?(l(),i("div",Ue,Ae)):n("",!0),t.items.length>0?(l(),i("div",Se,[e("div",Me,[t.paginate_object?(l(),f(H,{key:0,onPagination_page:t.loadHandles,pagination:t.paginate_object},null,8,["onPagination_page","pagination"])):n("",!0)])])):n("",!0)],64))}}),Re={class:"form-floating mb-3"},Ne=e("label",{for:"handle-title"},"Название ручки",-1),qe={class:"form-floating mb-3"},Be=e("label",{for:"handle-title"},"Цена ручки",-1),De={class:"input-group mb-3"},Ee={class:"form-floating"},Je=e("label",{for:"fittings_color"},[e("i",{class:"fa-solid fa-palette"}),c(" Цвет ручки")],-1),ze=e("button",{class:"btn btn-outline-secondary",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},[e("i",{class:"fa-solid fa-up-right-and-down-left-from-center"})],-1),Ge={class:"dropdown-menu dropdown-menu-end"},Ze=e("li",null,[e("hr",{class:"dropdown-divider"})],-1),Ke={class:"form-floating mb-3 border-gray-100 border"},Qe=e("label",{for:"door-handle"},"Вариант ручки",-1),We={class:"row"},Xe={key:0,class:"col-12"},Ye=e("h6",{class:"font-bold my-3"},"Новые фотографии к ручке",-1),xe=[Ye],et={class:"col-md-4 mb-2 image-preview d-flex align-items-start"},tt={class:"card w-100"},st=["src"],ot={class:"card-body d-flex justify-center"},lt=["onClick"],at={class:"card-body"},it={class:"form-floating mb-3"},nt=["onUpdate:modelValue"],dt=e("label",{for:"floatingInput"},"Название",-1),rt={class:"form-floating"},ct=["onUpdate:modelValue"],ht=e("label",{for:"floatingTextarea"},"Описание",-1),ut={key:2,class:"col-12"},mt=e("h6",{class:"font-bold my-3"},"Ранее загруженные фотографии к ручке",-1),_t=[mt],pt={class:"col-md-4 mb-2 image-preview d-flex align-items-start"},ft={class:"card w-100"},gt=["src"],vt=["src"],bt={class:"card-body d-flex justify-center"},$t=["onClick"],yt={class:"card-body"},kt={class:"form-floating mb-3"},wt=["onUpdate:modelValue"],Ct=e("label",{for:"floatingInput"},"Название",-1),Ht={class:"form-floating"},jt=["onUpdate:modelValue"],Lt=e("label",{for:"floatingTextarea"},"Описание",-1),Ut={class:"row"},It={class:"col-12"},Vt={class:"alert alert-danger alert-dismissible fade show",role:"alert"},Ft=e("strong",null,"Внимание!",-1),Pt=["onClick"],At={class:"row mt-5"},St={class:"col-12 d-flex justify-content-center"},Mt=["disabled"],Ot={key:0,class:"fa-regular fa-floppy-disk mr-1"},Tt={key:1,class:"spinner-border spinner-border-sm text-success",role:"status"},Rt=e("i",{class:"fa-solid fa-xmark mr-1"},null,-1),Nt={class:"modal fade",id:"choose-color-handle",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},qt={class:"modal-dialog"},Bt={class:"modal-content"},Dt=e("div",{class:"modal-header"},[e("h1",{class:"modal-title fs-5",id:"exampleModalLabel"},"Выбор цвета RAL"),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Et={class:"modal-body"},Jt={props:["item"],data(){return{messages:[],uploaded_variants_image:[],loading:!1,colorModal:null,form:{id:null,title:null,price:null,color:null,variants:[]}}},computed:{needClearForm(){return this.form.id||this.form.title||this.form.price||this.form.color||this.uploaded_variants_image.length>0}},mounted(){this.colorModal=new bootstrap.Modal(document.getElementById("choose-color-handle"),{}),this.item&&this.$nextTick(()=>{this.form={id:this.item.id||null,title:this.item.title||null,price:this.item.price||0,color:this.item.color||null,variants:this.item.variants||[]}})},methods:{callbackSelectColor(a){this.form.color=a.color.hex,this.colorModal.hide()},selectColor(){this.colorModal.show()},isHex(a){return/^#[0-9A-F]{6}$/i.test(a)},alert(a){this.messages.push(a)},resetForm(){this.uploaded_variants_image=[],this.form.id=null,this.form.title=null,this.form.price=0,this.form.color=null,this.form.variants=[],this.$refs.handleImageRef.value=null,this.$emit("callback")},removeUploadedPhoto(a,t){this.form[a].splice(t,1)},removePhoto(a,t){this[a].splice(t,1)},getPhoto(a){return{imageUrl:URL.createObjectURL(a)}},onChangePhotos(a,t){const o=t.target.files;for(let s=0;s<o.length;s++)this[a].push({image:o[s],title:null,description:null})},removeMessage(a){this.messages.splice(a,1)},submit(){let a=new FormData;if(Object.keys(this.form).forEach(t=>{const o=this.form[t]||"";typeof o=="object"?a.append(t,JSON.stringify(o)):a.append(t,o)}),this.uploaded_variants_image.length>0){for(let t=0;t<this.uploaded_variants_image.length;t++)a.append("uploaded_variants_image[]",this.uploaded_variants_image[t].image),this.uploaded_variants_image[t].image_name=this.uploaded_variants_image[t].image.name||null;a.append("uploaded_image_info",JSON.stringify(this.uploaded_variants_image))}this.$store.dispatch("storeHandle",{handleForm:a}).then(t=>{this.$emit("callback"),this.resetForm()}).catch(t=>{})}}},zt=Object.assign(Jt,{__name:"HandleForm",setup(a){return(t,o)=>(l(),i(m,null,[e("form",{action:"",onSubmit:o[8]||(o[8]=k((...s)=>t.submit&&t.submit(...s),["prevent"]))},[e("div",Re,[h(e("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=s=>t.form.title=s),class:"form-control",id:"handle-title",required:""},null,512),[[u,t.form.title]]),Ne]),e("div",qe,[h(e("input",{type:"number","onUpdate:modelValue":o[1]||(o[1]=s=>t.form.price=s),class:"form-control",id:"handle-price",required:""},null,512),[[u,t.form.price]]),Be]),e("div",De,[t.isHex(t.form.color)?(l(),i("span",{key:0,class:"input-group-text border-secondary",style:b([{"background-color":t.form.color},{width:"40px"}]),id:"basic-addon1"},null,4)):n("",!0),e("div",Ee,[h(e("input",{type:"text",onInvalid:o[2]||(o[2]=s=>t.alert("Вы не выбрали цвет фурнитуры")),"onUpdate:modelValue":o[3]||(o[3]=s=>t.form.color=s),class:"form-control",id:"fittings_color",required:""},null,544),[[u,t.form.color]]),Je]),ze,e("ul",Ge,[e("li",null,[e("a",{class:"dropdown-item",href:"#",onClick:o[4]||(o[4]=s=>t.form.color=null)},"Не выбрано")]),Ze,e("li",null,[e("a",{class:"dropdown-item",onClick:o[5]||(o[5]=(...s)=>t.selectColor&&t.selectColor(...s)),href:"javascript:void(0)"},"Цвет RAL")])])]),e("div",Ke,[e("input",{type:"file",class:"form-control",accept:"image/*",id:"door-handle",ref:"handleImageRef",onChange:o[6]||(o[6]=s=>t.onChangePhotos("uploaded_variants_image",s)),multiple:""},null,544),Qe]),e("div",We,[t.uploaded_variants_image.length>0?(l(),i("div",Xe,xe)):n("",!0),t.uploaded_variants_image.length>0?(l(!0),i(m,{key:1},p(t.uploaded_variants_image,(s,d)=>(l(),i("div",et,[e("div",tt,[e("img",{style:{"min-height":"200px"},src:t.getPhoto(s.image).imageUrl,class:"card-img-top uploaded-image-mini",alt:""},null,8,st),e("div",ot,[e("a",{href:"javascript:void(0)",class:"text-danger",onClick:r=>t.removePhoto("uploaded_variants_image",d)},"Удалить фото",8,lt)]),e("div",at,[e("div",it,[h(e("input",{type:"text","onUpdate:modelValue":r=>t.uploaded_variants_image[d].title=r,class:"form-control border-gray-300 rounded-md",id:"floatingInput",required:""},null,8,nt),[[u,t.uploaded_variants_image[d].title]]),dt]),e("div",rt,[h(e("textarea",{class:"form-control","onUpdate:modelValue":r=>t.uploaded_variants_image[d].description=r,placeholder:"Leave a comment here",id:"floatingTextarea",required:""},null,8,ct),[[u,t.uploaded_variants_image[d].description]]),ht])])])]))),256)):n("",!0),t.form.variants.length>0?(l(),i("div",ut,_t)):n("",!0),(l(!0),i(m,null,p(t.form.variants,(s,d)=>(l(),i("div",pt,[e("div",ft,[s.image.indexOf("http")===-1?(l(),i("img",{key:0,style:{"min-height":"200px"},src:"/images/"+s.image,class:"card-img-top uploaded-image-mini",alt:""},null,8,gt)):(l(),i("img",{key:1,style:{"min-height":"200px"},src:s.image,class:"card-img-top uploaded-image-mini",alt:""},null,8,vt)),e("div",bt,[e("a",{href:"javascript:void(0)",class:"text-danger",onClick:r=>t.removeUploadedPhoto("variants",d)},"Удалить",8,$t)]),e("div",yt,[e("div",kt,[h(e("input",{type:"text","onUpdate:modelValue":r=>t.form.variants[d].title=r,class:"form-control border-gray-300 rounded-md",id:"floatingInput"},null,8,wt),[[u,t.form.variants[d].title]]),Ct]),e("div",Ht,[h(e("textarea",{class:"form-control","onUpdate:modelValue":r=>t.form.variants[d].description=r,placeholder:"Leave a comment here",id:"floatingTextarea"},null,8,jt),[[u,t.form.variants[d].description]]),Lt])])])]))),256))]),e("div",Ut,[e("div",It,[t.messages.length>0?(l(!0),i(m,{key:0},p(t.messages,(s,d)=>(l(),i("div",Vt,[Ft,c(" "+_(s||"Ошибка")+" ",1),e("button",{type:"button",class:"btn-close",onClick:r=>t.removeMessage(d)},null,8,Pt)]))),256)):n("",!0)])]),e("div",At,[e("div",St,[e("button",{disabled:!t.needClearForm,class:"btn btn-outline-success rounded-5"},[t.loading?(l(),i("span",Tt)):(l(),i("i",Ot)),c(" Сохранить ручку ")],8,Mt),t.needClearForm&&!t.loading?(l(),i("button",{key:0,type:"button",onClick:o[7]||(o[7]=(...s)=>t.resetForm&&t.resetForm(...s)),class:"btn btn-outline-danger rounded-5 ml-2"},[Rt,c(" Очистить форму ")])):n("",!0)])])],32),e("div",Nt,[e("div",qt,[e("div",Bt,[Dt,e("div",Et,[g(j,{onSelect:t.callbackSelectColor},null,8,["onSelect"])])])])])],64))}}),Gt=e("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"},"Ручки",-1),Zt={class:"py-12"},Kt={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},Qt={class:"bg-white overflow-hidden shadow-sm sm:rounded-lg"},Wt={class:"p-6 text-gray-900"},Xt=e("hr",{class:"hr my-5"},null,-1),Yt={data(){return{loading:!1,selectedHandle:null}},methods:{selectHandle(a){this.selectedHandle=a,this.loading=!0,this.$nextTick(()=>{this.loading=!1})},callbackHandleForm(){this.loading=!0,this.selectedHandle=null,this.$nextTick(()=>{this.loading=!1})}}},as=Object.assign(Yt,{__name:"HandlesPage",setup(a){return(t,o)=>(l(),i(m,null,[g(w(C),{title:"Ручки"}),g($,null,{header:v(()=>[Gt]),default:v(()=>[e("div",Zt,[e("div",Kt,[e("div",Qt,[e("div",Wt,[t.loading?n("",!0):(l(),f(zt,{key:0,item:t.selectedHandle,onCallback:t.callbackHandleForm},null,8,["item","onCallback"])),Xt,t.loading?n("",!0):(l(),f(Te,{key:1,onSelect:t.selectHandle},null,8,["onSelect"]))])])])])]),_:1})],64))}});export{as as default};