import{_ as y}from"./AuthenticatedLayout-DKEVbNu6.js";import{m as $,o as l,c as n,b as t,d as u,v as h,e as a,f as r,F as c,r as _,g as f,t as d,h as k,i as v,a as b,u as C,w as g,Z as w}from"./app-n5g1UPt_.js";import{P as j}from"./Pagination-T7_qpnq1.js";import{R as F}from"./RalColorSelector-FyzzFilM.js";import"./ApplicationLogo-CRyn42vh.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const L={class:"row"},S={class:"col-12"},M={class:"input-group mb-3"},A={class:"form-floating"},I=t("label",{for:"search-colors"},"Поиск по цвету",-1),V=t("i",{class:"fa-solid fa-magnifying-glass"},null,-1),O=[V],P={key:0,class:"table"},T={key:0},B=t("i",{class:"fa-solid fa-caret-down"},null,-1),N=[B],U={key:1},q=t("i",{class:"fa-solid fa-caret-up"},null,-1),D=[q],E={key:0},R=t("i",{class:"fa-solid fa-caret-down"},null,-1),G=[R],J={key:1},Z=t("i",{class:"fa-solid fa-caret-up"},null,-1),z=[Z],H={key:0},K=t("i",{class:"fa-solid fa-caret-down"},null,-1),Q=[K],W={key:1},X=t("i",{class:"fa-solid fa-caret-up"},null,-1),Y=[X],x={key:0},tt=t("i",{class:"fa-solid fa-caret-down"},null,-1),ot=[tt],st={key:1},et=t("i",{class:"fa-solid fa-caret-up"},null,-1),lt=[et],it={key:0},nt=t("i",{class:"fa-solid fa-caret-down"},null,-1),rt=[nt],at={key:1},dt=t("i",{class:"fa-solid fa-caret-up"},null,-1),ct=[dt],ut={key:0},ht=t("i",{class:"fa-solid fa-caret-down"},null,-1),mt=[ht],pt={key:1},_t=t("i",{class:"fa-solid fa-caret-up"},null,-1),ft=[_t],bt=t("th",{scope:"col",class:"text-center"},"Действие",-1),gt={scope:"row"},yt=["onClick"],$t={class:"text-center"},kt={class:"text-center"},vt={class:"text-center"},Ct={class:"text-center"},wt={class:"text-center"},jt={class:"dropdown"},Ft=t("button",{class:"btn btn-link",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},[t("i",{class:"fa-solid fa-bars"})],-1),Lt={class:"dropdown-menu"},St=["onClick"],Mt=t("i",{class:"fa-solid fa-pen mr-2"},null,-1),At=["onClick"],It=t("i",{class:"fa-solid fa-trash-can mr-2"},null,-1),Vt={key:1,class:"alert alert-success",role:"alert"},Ot=t("h4",{class:"alert-heading"},"Цвета",-1),Pt=t("p",null,"К сожалению, раздел петель пуст. Вы еще не добавили ни одного цвета, которые можно отобразить на этой странице.",-1),Tt=t("hr",null,null,-1),Bt=t("p",{class:"mb-0"},"Воспользуйтесь формой выше и добавьте первый цвет",-1),Nt=[Ot,Pt,Tt,Bt],Ut={key:2,class:"row mb-3"},qt={class:"col-12"},Dt={data(){return{sort:{column:null,direction:"desc"},search:null,current_page:0,paginate_object:null,items:[{id:null,title:null,price:0}]}},computed:{...$(["getColors","getColorsPaginateObject"])},mounted(){this.loadColors()},methods:{sortAndLoad(i){this.sort.column=i,this.sort.direction=this.sort.direction==="desc"?"asc":"desc",this.loadColors(this.current_page)},loadColors(i=0){this.current_page=i,this.$store.dispatch("loadColors",{dataObject:{search:this.search,order:this.sort.column,direction:this.sort.direction},page:this.current_page}).then(o=>{this.items=this.getColors,this.paginate_object=this.getColorsPaginateObject}).catch(()=>{this.loading=!1})},selectItem(i){this.$emit("select",i)},duplicateItem(i){this.$store.dispatch("duplicateColor",{colorId:i}).then(()=>{this.sortAndLoad("id")})},removeItem(i){this.$store.dispatch("removeColor",{colorId:i}).then(()=>{this.sortAndLoad("id")})}}},Et=Object.assign(Dt,{__name:"ColorTable",setup(i){return(o,s)=>(l(),n(c,null,[t("form",L,[t("div",S,[t("div",M,[t("div",A,[u(t("input",{type:"search","onUpdate:modelValue":s[0]||(s[0]=e=>o.search=e),class:"form-control",id:"search-colors"},null,512),[[h,o.search]]),I]),t("button",{type:"button",onClick:s[1]||(s[1]=e=>o.sortAndLoad("id")),class:"btn btn-outline-primary"},O)])])]),o.items.length>0?(l(),n("table",P,[t("thead",null,[t("tr",null,[t("th",{scope:"col",class:"cursor-pointer",onClick:s[2]||(s[2]=e=>o.sortAndLoad("id"))},[a("# "),o.sort.direction==="desc"&&o.sort.column==="id"?(l(),n("span",T,N)):r("",!0),o.sort.direction==="asc"&&o.sort.column==="id"?(l(),n("span",U,D)):r("",!0)]),t("th",{scope:"col",class:"text-center cursor-pointer",onClick:s[3]||(s[3]=e=>o.sortAndLoad("title"))},[a("Название "),o.sort.direction==="desc"&&o.sort.column==="title"?(l(),n("span",E,G)):r("",!0),o.sort.direction==="asc"&&o.sort.column==="title"?(l(),n("span",J,z)):r("",!0)]),t("th",{scope:"col",class:"text-center cursor-pointer",onClick:s[4]||(s[4]=e=>o.sortAndLoad("price"))},[a("Цена "),o.sort.direction==="desc"&&o.sort.column==="price"?(l(),n("span",H,Q)):r("",!0),o.sort.direction==="asc"&&o.sort.column==="price"?(l(),n("span",W,Y)):r("",!0)]),t("th",{scope:"col",class:"text-center cursor-pointer",onClick:s[5]||(s[5]=e=>o.sortAndLoad("code"))},[a("Код цвета "),o.sort.direction==="desc"&&o.sort.column==="code"?(l(),n("span",x,ot)):r("",!0),o.sort.direction==="asc"&&o.sort.column==="code"?(l(),n("span",st,lt)):r("",!0)]),t("th",{scope:"col",class:"text-center cursor-pointer",onClick:s[6]||(s[6]=e=>o.sortAndLoad("type"))},[a("Тип "),o.sort.direction==="desc"&&o.sort.column==="type"?(l(),n("span",it,rt)):r("",!0),o.sort.direction==="asc"&&o.sort.column==="type"?(l(),n("span",at,ct)):r("",!0)]),t("th",{scope:"col",class:"text-center cursor-pointer",onClick:s[7]||(s[7]=e=>o.sortAndLoad("updated_at"))},[a(" Дата изменения "),o.sort.direction==="desc"&&o.sort.column==="updated_at"?(l(),n("span",ut,mt)):r("",!0),o.sort.direction==="asc"&&o.sort.column==="updated_at"?(l(),n("span",pt,ft)):r("",!0)]),bt])]),t("tbody",null,[(l(!0),n(c,null,_(o.items,(e,m)=>(l(),n("tr",null,[t("th",gt,d(e.id||m),1),t("td",{class:"text-center",onClick:p=>o.selectItem(e)},d(e.title||"-"),9,yt),t("td",$t,d(e.price||0),1),t("td",kt,d(e.code||"Не задан"),1),t("td",vt,d(e.type||"Не задан"),1),t("td",Ct,d(e.updated_at||"-"),1),t("td",wt,[t("div",jt,[Ft,t("ul",Lt,[t("li",null,[t("a",{class:"dropdown-item",onClick:p=>o.selectItem(e),href:"javascript:void(0)"},[Mt,a("Редактировать")],8,St)]),t("li",null,[t("a",{class:"dropdown-item text-danger",onClick:p=>o.removeItem(e.id),href:"javascript:void(0)"},[It,a("Удалить")],8,At)])])])])]))),256))])])):r("",!0),o.items.length===0?(l(),n("div",Vt,Nt)):r("",!0),o.items.length>0?(l(),n("div",Ut,[t("div",qt,[o.paginate_object?(l(),f(j,{key:0,onPagination_page:o.loadColors,pagination:o.paginate_object},null,8,["onPagination_page","pagination"])):r("",!0)])])):r("",!0)],64))}}),Rt={class:"form-floating mb-3"},Gt=t("label",{for:"color-title"},"Наименование цвета",-1),Jt={class:"form-floating mb-3"},Zt=t("label",{for:"color-title"},"Цена",-1),zt={class:"input-group mb-3"},Ht={class:"form-floating"},Kt=t("label",{for:"color-title"},"Код цвета",-1),Qt=t("i",{class:"fa-solid fa-palette"},null,-1),Wt=[Qt],Xt={class:"form-floating mb-3"},Yt=t("option",{value:null},"Выберите один из вариантов",-1),xt=["value"],to=t("label",{for:"floatingSelect"},"Вариант применения",-1),oo={class:"row"},so={class:"col-12"},eo={class:"alert alert-danger alert-dismissible fade show",role:"alert"},lo=t("strong",null,"Внимание!",-1),io=["onClick"],no={class:"row mt-5"},ro={class:"col-12 d-flex justify-content-center"},ao=["disabled"],co={key:0,class:"fa-regular fa-floppy-disk mr-1"},uo={key:1,class:"spinner-border spinner-border-sm text-success",role:"status"},ho=t("i",{class:"fa-solid fa-xmark mr-1"},null,-1),mo={class:"modal fade",id:"choose-color",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},po={class:"modal-dialog"},_o={class:"modal-content"},fo=t("div",{class:"modal-header"},[t("h1",{class:"modal-title fs-5",id:"exampleModalLabel"},"Выбор цвета RAL"),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),bo={class:"modal-body"},go={props:["item"],data(){return{messages:[],loading:!1,colorModal:null,types:[{title:"Для всех",key:"all"},{title:"Отделка сторон",key:"side_finish"},{title:"Короб и каркас",key:"box_and_frame"},{title:"Фурнитура",key:"fittings"},{title:"Уплотнитель",key:"seal"}],form:{id:null,title:null,price:null,code:null,type:null}}},computed:{needClearForm(){return this.form.id||this.form.title||this.form.price||this.form.code||this.form.type}},mounted(){this.item&&this.$nextTick(()=>{this.form={id:this.item.id||null,title:this.item.title||null,price:this.item.price||0,code:this.item.code||null,type:this.item.type||null}})},methods:{callbackSelectColor(i){this.form.title=i.names.en||i.color.code,this.form.code=i.color.code||i.color.hex||null,this.colorModal.hide()},selectColor(){this.colorModal=new bootstrap.Modal(document.getElementById("choose-color"),{}),this.colorModal.show()},alert(i){this.messages.push(i)},resetForm(){this.form.id=null,this.form.title=null,this.form.price=0,this.form.code=null,this.form.type=null,this.$emit("callback")},removeMessage(i){this.messages.splice(i,1)},submit(){let i=new FormData;Object.keys(this.form).forEach(o=>{const s=this.form[o]||"";typeof s=="object"?i.append(o,JSON.stringify(s)):i.append(o,s)}),this.$store.dispatch("storeColor",{colorForm:i}).then(o=>{this.$emit("callback"),this.resetForm()}).catch(o=>{})}}},yo=Object.assign(go,{__name:"ColorForm",setup(i){return(o,s)=>(l(),n(c,null,[t("form",{action:"",onSubmit:s[7]||(s[7]=v((...e)=>o.submit&&o.submit(...e),["prevent"]))},[t("div",Rt,[u(t("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=e=>o.form.title=e),class:"form-control",id:"color-title",required:""},null,512),[[h,o.form.title]]),Gt]),t("div",Jt,[u(t("input",{type:"number","onUpdate:modelValue":s[1]||(s[1]=e=>o.form.price=e),class:"form-control",id:"color-price",required:""},null,512),[[h,o.form.price]]),Zt]),t("div",zt,[t("div",Ht,[u(t("input",{type:"text","onUpdate:modelValue":s[2]||(s[2]=e=>o.form.code=e),class:"form-control",id:"color-code"},null,512),[[h,o.form.code]]),Kt]),t("button",{type:"button",onClick:s[3]||(s[3]=(...e)=>o.selectColor&&o.selectColor(...e)),class:"btn btn-outline-secondary rounded-0",id:"basic-addon1"},Wt)]),t("div",Xt,[u(t("select",{class:"form-select",onInvalid:s[4]||(s[4]=e=>o.alert("Вы не выбрали вариант использования!")),"onUpdate:modelValue":s[5]||(s[5]=e=>o.form.type=e),id:"floatingSelect","aria-label":"Floating label select example",required:""},[Yt,(l(!0),n(c,null,_(o.types,e=>(l(),n("option",{value:e.key},d(e.title),9,xt))),256))],544),[[k,o.form.type]]),to]),t("div",oo,[t("div",so,[o.messages.length>0?(l(!0),n(c,{key:0},_(o.messages,(e,m)=>(l(),n("div",eo,[lo,a(" "+d(e||"Ошибка")+" ",1),t("button",{type:"button",class:"btn-close",onClick:p=>o.removeMessage(m)},null,8,io)]))),256)):r("",!0)])]),t("div",no,[t("div",ro,[t("button",{disabled:!o.needClearForm,class:"btn btn-outline-success rounded-5"},[o.loading?(l(),n("span",uo)):(l(),n("i",co)),a(" Сохранить цвет ")],8,ao),o.needClearForm&&!o.loading?(l(),n("button",{key:0,type:"button",onClick:s[6]||(s[6]=(...e)=>o.resetForm&&o.resetForm(...e)),class:"btn btn-outline-danger rounded-5 ml-2"},[ho,a(" Очистить форму ")])):r("",!0)])])],32),t("div",mo,[t("div",po,[t("div",_o,[fo,t("div",bo,[b(F,{onSelect:o.callbackSelectColor},null,8,["onSelect"])])])])])],64))}}),$o=t("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"},"Цвета",-1),ko={class:"py-12"},vo={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},Co={class:"bg-white overflow-hidden shadow-sm sm:rounded-lg"},wo={class:"p-6 text-gray-900"},jo=t("hr",{class:"hr my-5"},null,-1),Fo={data(){return{loading:!1,selectedColor:null}},methods:{selectColor(i){this.selectedColor=i,this.loading=!0,this.$nextTick(()=>{this.loading=!1})},callbackColorForm(){this.loading=!0,this.selectedColor=null,this.$nextTick(()=>{this.loading=!1})}}},Oo=Object.assign(Fo,{__name:"ColorsPage",setup(i){return(o,s)=>(l(),n(c,null,[b(C(w),{title:"Цвета"}),b(y,null,{header:g(()=>[$o]),default:g(()=>[t("div",ko,[t("div",vo,[t("div",Co,[t("div",wo,[o.loading?r("",!0):(l(),f(yo,{key:0,item:o.selectedColor,onCallback:o.callbackColorForm},null,8,["item","onCallback"])),jo,o.loading?r("",!0):(l(),f(Et,{key:1,onSelect:o.selectColor},null,8,["onSelect"]))])])])])]),_:1})],64))}});export{Oo as default};