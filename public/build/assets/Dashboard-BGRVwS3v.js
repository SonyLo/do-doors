import{_ as S}from"./AuthenticatedLayout-VxhPxQC7.js";import{m as j,o as s,c as n,b as o,f as a,v as g,F as _,r as f,q as b,t as c,i as v,e as m,n as w,h as y,g as p,a as k,d as x,_ as V,u as M,w as C,Z as I}from"./app-IgJzOcEi.js";import{u as F,_ as P}from"./CalcForm-BkgUh_CV.js";import{_ as z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./ApplicationLogo-DnOrubwk.js";import"./RalColorSelector-B6AoE9De.js";const U={name:"MyComponent",props:["door"],data(){return{need_addition:!0,messages:[],filterHeight:null,filterWidth:null,selectedColorParam:null,colorModal:null,confirmModal:null,finishFrontVariantModal:null,finishBackVariantModal:null,colors:[],confirm:{title:null,message:null},doorForm:{id:null,width:0,height:0,depth:0,count:1,price:0,size:null,purpose:null,comment:null,dealer_percent:0,opening_type:{title:null},box_and_frame_color:{title:null},door_type:{title:null},front_side_finish:{title:null},back_side_finish:{title:null},front_side_finish_color:{title:null},back_side_finish_color:{title:null},seal_color:{title:null},fittings_color:{title:null},loops:{title:null},loops_count:0,price_type:{title:null},hinge_manufacturer:{title:null},handle_holes:{title:null},handle_holes_type:{title:null},need_handle_holes:!0,need_upper_jumper:!1,need_automatic_doorstep:!1,need_hidden_stopper:!1,need_hidden_door_closer:!1,need_hidden_skirting_board:!1,need_door_install:!1,need_wrapper:!1}}},computed:{...j(["getErrors","getDictionary","cartTotalCount","cartProducts","cartTotalPrice"]),filteredSideFinishColors(){return this.getDictionary.color_variants.filter(e=>e.type==="side_finish"||e.type==="all")},filteredBoxAndFrameColors(){return this.getDictionary.color_variants.filter(e=>e.type==="box_and_frame"||e.type==="all")},filteredFittingsColors(){return this.getDictionary.color_variants.filter(e=>e.type==="fittings"||e.type==="all")},filteredSealColors(){return this.getDictionary.color_variants.filter(e=>e.type==="seal"||e.type==="all")},resultPrice(){return this.doorForm.price_type.id!==3?this.summaryPrice:this.summaryPriceWithDealer},summaryPriceWithDealer(){return Math.round((this.summaryPrice||0)*(1+(this.doorForm.dealer_percent||0)/100))},summaryPrice(){let r=0,e=this.doorForm.price_type.key;Object.keys(this.doorForm).forEach(t=>{t&&typeof this.doorForm[t]=="object"&&this.doorForm[t]!=null&&this.doorForm[t].price&&(r+=typeof this.doorForm[t].price=="object"?this.doorForm[t].price[e]||0:this.doorForm[t].price||0)});let d=this.getDictionary.prices,h=0,l=!1,i=null;if(d.forEach(t=>{t.width===this.doorForm.width&&t.height===this.doorForm.height&&(l=!0,i=t)}),l)i.materials.forEach(t=>{t.id===this.doorForm.front_side_finish.id&&(h+=typeof t.price=="object"?t.price[e]:t.price),t.id===this.doorForm.back_side_finish.id&&(h+=typeof t.price=="object"?t.price[e]:t.price)});else for(let t=0;t<d.length;t++)if(d[t].width>=this.doorForm.width&&d[t].height>=this.doorForm.height){d[t].materials.forEach(u=>{u.id===this.doorForm.front_side_finish.id&&(h+=typeof u.price=="object"?u.price[e]:u.price)}),d[t].materials.forEach(u=>{u.id===this.doorForm.back_side_finish.id&&(h+=typeof u.price=="object"?u.price[e]:u.price)});break}return r+h},filteredHeight(){return this.getDictionary?this.filterHeight?this.getDictionary.size_variants.filter(r=>(""+r.height).indexOf(this.filterHeight)!==-1):this.getDictionary.size_variants:[]},filteredWidth(){return this.getDictionary?this.filterWidth?this.getDictionary.size_variants.filter(r=>(""+r.width).indexOf(this.filterWidth)!==-1):this.getDictionary.size_variants:[]}},watch:{"doorForm.box_and_frame_color":{handler(r){let e=this.doorForm.box_and_frame_color.title;(this.doorForm.box_and_frame_color.title||"").length===4&&Object.keys(this.colors).forEach(d=>{this.colors[d].code===e&&(this.doorForm.box_and_frame_color.code=this.colors[d].code,this.doorForm.box_and_frame_color.title=this.colors[d].color.hex)})},deep:!0},"doorForm.fittings_color":{handler(r){let e=this.doorForm.fittings_color.title;(this.doorForm.fittings_color.title||"").length===4&&Object.keys(this.colors).forEach(d=>{this.colors[d].code===e&&(this.doorForm.fittings_color.code=this.colors[d].code,this.doorForm.fittings_color.title=this.colors[d].color.hex)})},deep:!0},"doorForm.back_side_finish_color":{handler(r){let e=this.doorForm.back_side_finish_color.title;(this.doorForm.back_side_finish_color.title||"").length===4&&Object.keys(this.colors).forEach(d=>{this.colors[d].code===e&&(this.doorForm.back_side_finish_color.code=this.colors[d].code,this.doorForm.back_side_finish_color.title=this.colors[d].color.hex)})},deep:!0},"doorForm.front_side_finish_color":{handler(r){let e=this.doorForm.front_side_finish_color.title;(this.doorForm.front_side_finish_color.title||"").length===4&&Object.keys(this.colors).forEach(d=>{if(this.colors[d].code===e){const h=this.colors[d];this.doorForm.front_side_finish_color.code=h.code,this.doorForm.front_side_finish_color.title=h.color.hex}})},deep:!0},"doorForm.need_handle_holes":{handler(r){this.doorForm.need_handle_holes||(this.doorForm.handle_holes=this.getDictionary.handle_holes_variants[0],this.doorForm.handle_holes_type={title:null})},deep:!0},"doorForm.opening_type":{handler(r){if(this.doorForm.opening_type){let e=this.getDictionary.opening_variants.find(d=>d.id===this.doorForm.opening_type.id);e&&(this.doorForm.depth=e.depth||0)}},deep:!0},summaryPriceWithDealer:{handler(r){this.doorForm.price=this.summaryPriceWithDealer},deep:!0},summaryPrice:{handler(r){this.doorForm.price=this.summaryPrice},deep:!0}},mounted(){this.loadRalColors(),this.door?this.$nextTick(()=>{this.doorForm={id:this.door.product.id,width:this.door.product.width,height:this.door.product.height,depth:this.door.product.depth,count:this.door.quantity,size:this.door.product.size,purpose:this.door.product.purpose||null,handle_holes:this.door.product.handle_holes||null,handle_holes_type:this.door.product.handle_holes_type||null,opening_type:this.door.product.opening_type||null,box_and_frame_color:this.door.product.box_and_frame_color||null,door_type:this.door.product.door_type||null,front_side_finish:this.door.product.front_side_finish||null,back_side_finish:this.door.product.back_side_finish||null,front_side_finish_color:this.door.product.front_side_finish_color||null,back_side_finish_color:this.door.product.back_side_finish_color||null,seal_color:this.door.product.seal_color||null,fittings_color:this.door.product.fittings_color||null,loops:this.door.product.loops||null,loops_count:this.door.product.loops_count||0,price_type:this.door.product.price_type||null,hinge_manufacturer:this.door.product.hinge_manufacturer||null,need_handle_holes:!0,need_upper_jumper:!1,need_automatic_doorstep:!1,need_hidden_stopper:!1,need_hidden_door_closer:!1,need_hidden_skirting_board:!1,need_door_install:!1,need_wrapper:!1}}):this.doorForm.id=F.v1(),this.doorForm.purpose="Дверь "+(this.cartProducts.length+1)},methods:{openConfirmModal(r,e){this.confirm.title=r||null,this.confirm.message=e||null,this.confirmModal.show()},loadRalColors(){axios.get("/ral_pretty.json").then(r=>{this.colors=r.data})},selectSideFinish(r,e,d){this.doorForm[r][e][d].selected||!1||this.doorForm[r][e].forEach(l=>{l.selected&&delete l.selected}),this.doorForm[r][e][d].selected=!this.doorForm[r][e][d].selected},priceForSide(r){let e=this.doorForm.price_type.key,d=0,h=null,l=this.getDictionary.prices;if(this.doorForm.width===0&&this.doorForm.height===0)return 0;if(l.forEach(t=>{this.doorForm.width===t.width&&this.doorForm.height===t.height&&(h=t)}),!h)return d;let i=null;return h.materials&&h.materials.forEach(t=>{t.id===this.doorForm[r].id&&(i=t.price,d=typeof t.price=="object"?t.price[e]:t.price)}),this.doorForm[r].price_variants=i,d},isHex(r){return/^#[0-9A-F]{6}$/i.test(r)},callbackSelectColor(r){this.doorForm[this.selectedColorParam].title=r.color.hex,this.doorForm[this.selectedColorParam].code=r.color.code||r.color.hex||null,this.colorModal.hide()},selectColor(r,e){this.doorForm[r]={title:e.code||null,code:e.code||null,price:e.price||0,type:e.type||"all"},e.title==="RAL"&&(this.selectedColorParam=r,this.doorForm[r]={title:"RAL",code:"RAL",price:e.price||0,type:e.type||"all"},this.colorModal=new bootstrap.Modal(document.getElementById("choose-color-"+this.doorForm.id),{}),this.colorModal.show())},clearForm(r=!1){this.confirmModal.hide(),r?this.doorForm={id:F.v1(),width:this.getDictionary.size_variants[0].width||0,height:this.getDictionary.size_variants[0].height||0,depth:0,count:0,size:null,purpose:"Входная",handle_holes:this.getDictionary.handle_holes_variants[0],handle_holes_type:this.getDictionary.handle_holes_type_variants[0],opening_type:this.getDictionary.opening_variants[0],box_and_frame_color:{title:null},door_type:this.getDictionary.door_variants[0],front_side_finish:this.getDictionary.finishes_variants[0],back_side_finish:this.getDictionary.finishes_variants[0],front_side_finish_color:{title:null},back_side_finish_color:{title:null},seal_color:{title:null},fittings_color:{title:null},loops:this.getDictionary.loops_variants[0],loops_count:2,price_type:this.getDictionary.price_type_variants[0],hinge_manufacturer:this.getDictionary.hinge_manufacturer_variants[0],need_handle_holes:!0,need_upper_jumper:!1,need_automatic_doorstep:!1,need_hidden_stopper:!1,need_hidden_door_closer:!1,need_hidden_skirting_board:!1,need_door_install:!1,need_wrapper:!1}:this.doorForm={id:F.v1(),width:0,height:0,depth:0,count:1,price:0,size:null,purpose:null,dealer_percent:0,opening_type:{title:null},box_and_frame_color:{title:null},door_type:{title:null},front_side_finish:{title:null},back_side_finish:{title:null},front_side_finish_color:{title:null},back_side_finish_color:{title:null},seal_color:{title:null},fittings_color:{title:null},loops:{title:null},loops_count:0,price_type:{title:null},hinge_manufacturer:{title:null},handle_holes:this.getDictionary.handle_holes_variants[0],handle_holes_type:{title:null},need_handle_holes:!0,need_upper_jumper:!1,need_automatic_doorstep:!1,need_hidden_stopper:!1,need_hidden_door_closer:!1,need_hidden_skirting_board:!1,need_door_install:!1,need_wrapper:!1}},selectDoorSize(r){if(r==null){this.doorForm.width=0,this.doorForm.height=0,this.doorForm.size=null,this.doorForm.loops_count=0;return}this.doorForm.width=r.width,this.doorForm.height=r.height,this.doorForm.size=r,this.doorForm.loops_count=r.loops_count},changeDoorCount(r){r==="add"&&this.doorForm.count++,r==="sub"&&this.doorForm.count>0&&this.doorForm.count--},selectFrontSideFinish(){(this.doorForm.front_side_finish.door_variants||[]).length!==0&&(this.finishFrontVariantModal=new bootstrap.Modal(document.getElementById("finish-front-variant-modal-"+this.doorForm.id),{}),this.finishFrontVariantModal.show())},selectBackSideFinish(){(this.doorForm.back_side_finish.door_variants||[]).length!==0&&(this.finishBackVariantModal=new bootstrap.Modal(document.getElementById("finish-back-variant-modal-"+this.doorForm.id),{}),this.finishBackVariantModal.show())},alert(r){this.messages.push(r)},removeMessage(r){this.messages.splice(r,1)},submitForm(){this.messages=[],this.$store.dispatch("addProductToCart",this.doorForm).then(()=>{this.$nextTick(()=>{this.doorForm.id=F.v4()}),this.confirmModal.show(),this.$notify({title:"DoDoors",text:"Дверь успешно добавлена в корзину",type:"success"})})}}},E={style:{"min-width":"350px"},class:"table table-striped mr-2"},q={class:"input-group"},B={class:"form-floating"},H=o("label",{for:"floatingInput"},[o("i",{class:"fa-solid fa-signs-post"}),p(" Назначение двери")],-1),W=o("button",{class:"btn btn-outline-secondary",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},[o("i",{class:"fa-solid fa-up-right-and-down-left-from-center"})],-1),T={class:"dropdown-menu dropdown-menu-end rounded-0"},O=o("li",null,[o("hr",{class:"dropdown-divider"})],-1),A=["onClick"],R={class:"text-center text-primary font-bold text-black",style:{"font-size":"16px"}},L={class:"text-center text-primary font-bold text-black",style:{"font-size":"16px"}},N={class:"form-floating"},G=o("option",{value:{title:null}},"Выберите один из вариантов",-1),Z=["value"],J=o("label",{for:"door-type"},[o("i",{class:"fa-solid fa-door-open"}),p(" Выберите тип двери")],-1),K=o("tr",null,[o("td",null,"Размер двери по прайсу")],-1),Q={class:"input-group"},X={class:"form-floating"},Y=o("label",{for:"floatingInput"},[o("i",{class:"fa-solid fa-ruler-vertical"}),p(" Высота, мм")],-1),$=o("button",{class:"btn btn-outline-secondary",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},[o("i",{class:"fa-solid fa-up-right-and-down-left-from-center"})],-1),oo={class:"dropdown-menu dropdown-menu-end rounded-0"},to=o("li",null,[o("hr",{class:"dropdown-divider"})],-1),eo={class:"p-1"},lo={class:"form-floating"},ro=o("label",{for:"filtered-height"},"Фильтр высоты",-1),io=o("li",null,[o("hr",{class:"dropdown-divider"})],-1),so={class:"scrollable-menu p-2"},no=["onClick"],ao={key:0,class:"text-center"},co={class:"input-group"},ho={class:"form-floating"},_o=o("label",{for:"floatingInput"},[o("i",{class:"fa-solid fa-ruler-horizontal"}),p(" Ширина, мм")],-1),uo=o("button",{class:"btn btn-outline-secondary",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},[o("i",{class:"fa-solid fa-up-right-and-down-left-from-center"})],-1),fo={class:"dropdown-menu dropdown-menu-end rounded-0"},po=o("li",null,[o("hr",{class:"dropdown-divider"})],-1),mo={class:"p-1"},go={class:"form-floating"},vo=o("label",{for:"filtered-height"},"Фильтр ширины",-1),bo=o("li",null,[o("hr",{class:"dropdown-divider"})],-1),yo={class:"scrollable-menu p-2"},Fo=["onClick"],ko={key:0,class:"text-center"},wo={class:"d-flex justify-between"},xo=o("i",{class:"fa-solid fa-minus"},null,-1),Co=[xo],Do={class:"input-group"},jo=o("i",{class:"fa-solid fa-plus"},null,-1),So=[jo],Vo={class:"form-floating"},Mo=o("option",{value:{title:null}},"Выберите один из вариантов",-1),Io=["value"],Po=o("label",{for:"floatingSelect"},[o("i",{class:"fa-brands fa-openid"}),p(" Тип открытия двери и толщина")],-1),zo={class:"input-group"},Uo={class:"form-floating"},Eo=o("option",{value:{title:null}},"Выберите один из вариантов",-1),qo=["value"],Bo=o("label",{for:"floatingSelect"},[o("i",{class:"fa-solid fa-paint-roller"}),p(" Отделка первой стороны ")],-1),Ho=o("i",{class:"fa-solid fa-images"},null,-1),Wo=[Ho],To={key:0,style:{"line-height":"100%"}},Oo=o("small",null,[o("em",null,[o("strong",{class:"text-danger"},"Внимание!"),p(" сочетание размера и материала не доступно для заказа!")])],-1),Ao=[Oo],Ro={class:"input-group"},Lo={class:"form-floating"},No=o("label",{for:"front_side_finish_color"},[o("i",{class:"fa-solid fa-palette"}),p(" Цвет отделки первой стороны")],-1),Go=o("button",{class:"btn btn-outline-secondary",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},[o("i",{class:"fa-solid fa-up-right-and-down-left-from-center"})],-1),Zo={class:"dropdown-menu dropdown-menu-end rounded-0"},Jo=o("li",null,[o("hr",{class:"dropdown-divider"})],-1),Ko=["onClick"],Qo={class:"input-group"},Xo={class:"form-floating"},Yo=o("option",{value:{title:null}},"Выберите один из вариантов",-1),$o=["value"],ot=o("label",{for:"floatingSelect"},[o("i",{class:"fa-solid fa-paint-roller"}),p(" Отделка второй стороны")],-1),tt=o("i",{class:"fa-solid fa-images"},null,-1),et=[tt],lt={key:0,style:{"line-height":"100%"}},rt=o("small",null,[o("em",null,[o("strong",{class:"text-danger"},"Внимание!"),p(" сочетание размера и материала не доступно для заказа!")])],-1),it=[rt],st={class:"input-group"},nt={class:"form-floating"},dt=o("label",{for:"back_side_finish_color"},[o("i",{class:"fa-solid fa-palette"}),p(" Цвет отделки второй стороны")],-1),at=o("button",{class:"btn btn-outline-secondary",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},[o("i",{class:"fa-solid fa-up-right-and-down-left-from-center"})],-1),ct={class:"dropdown-menu dropdown-menu-end rounded-0"},ht=o("li",null,[o("hr",{class:"dropdown-divider"})],-1),_t=["onClick"],ut={class:"input-group"},ft={class:"form-floating"},pt=o("label",{for:"fittings_color"},[o("i",{class:"fa-solid fa-palette"}),p(" Цвет фурнитуры")],-1),mt=o("button",{class:"btn btn-outline-secondary",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},[o("i",{class:"fa-solid fa-up-right-and-down-left-from-center"})],-1),gt={class:"dropdown-menu dropdown-menu-end rounded-0"},vt=o("li",null,[o("hr",{class:"dropdown-divider"})],-1),bt=["onClick"],yt={class:"form-floating"},Ft=o("option",{value:{title:null}},"Выберите один из вариантов",-1),kt=["value"],wt=o("label",{for:"floatingSelect"},[o("i",{class:"fa-solid fa-angles-left"}),p(" Сторона петель")],-1),xt={class:"form-check form-switch"},Ct=o("label",{class:"form-check-label",for:"need-upper-jumper"}," Нужна верхняя перемычка ",-1),Dt=o("tr",null,[o("td",null,"Растояние без верх перемычки: от верха двери до потолка (стандарт 5мм)")],-1),jt={class:"form-floating"},St=o("option",{value:{title:null}},"Выберите один из вариантов",-1),Vt=["value"],Mt=o("label",{for:"floatingSelect"},[o("i",{class:"fa-solid fa-industry"}),p(" Производитель петель")],-1),It={class:"form-floating"},Pt=["value"],zt=o("label",{for:"floatingSelect"},"Отверстий под ручку",-1),Ut={class:"form-check form-switch"},Et=o("label",{class:"form-check-label",for:"need-automatic-doorstep"}," Нужен автоматический порог \\ не нужен ",-1),qt={class:"form-check form-switch"},Bt=o("label",{class:"form-check-label",for:"need-hidden-stopper"}," Нужен скрытый стопор \\ не нужен ",-1),Ht={class:"form-check form-switch"},Wt=o("label",{class:"form-check-label",for:"need-hidden-door-closer"}," Нужен скрытый доводчик \\ не нужен ",-1),Tt={class:"form-floating"},Ot=o("option",{value:{title:null}},"Выберите один из вариантов",-1),At=["value"],Rt=o("label",{for:"door-type"},"Тип цены",-1),Lt={class:"form-floating"},Nt=o("label",{for:"floatingInput"},"Процент дилера",-1);function Gt(r,e,d,h,l,i){return s(),n("table",E,[o("thead",null,[o("th",null,[o("div",q,[o("div",B,[a(o("input",{type:"text",min:"0","onUpdate:modelValue":e[0]||(e[0]=t=>l.doorForm.purpose=t),class:"form-control",id:"floatingInput"},null,512),[[g,l.doorForm.purpose]]),H]),W,o("ul",T,[o("li",null,[o("a",{class:"dropdown-item",onClick:e[1]||(e[1]=t=>l.doorForm.purpose=null),href:"javascript:void(0)"},"Не выбрано")]),O,o("li",null,[(s(!0),n(_,null,f(r.getDictionary.purpose_variants,t=>(s(),n("a",{class:b(["dropdown-item",{"bg-primary text-white":l.doorForm.purpose===t}]),onClick:u=>l.doorForm.purpose=t,href:"javascript:void(0)"},c(t),11,A))),256))])])])])]),o("tbody",null,[o("tr",null,[o("td",null,[o("p",R,c(i.resultPrice)+" ₽ ",1)])]),o("tr",null,[o("td",null,[o("p",L,c(i.resultPrice)+"х"+c(l.doorForm.count)+"="+c(i.resultPrice*l.doorForm.count)+"₽",1)])]),o("tr",null,[o("td",null,[o("div",N,[a(o("select",{class:"form-select","onUpdate:modelValue":e[2]||(e[2]=t=>l.doorForm.door_type=t),onInvalid:e[3]||(e[3]=t=>i.alert("Вы не выбрали тип двери!")),id:"door-type","aria-label":"door-type",required:""},[G,(s(!0),n(_,null,f(r.getDictionary.door_variants,t=>(s(),n("option",{value:t},c(t.title),9,Z))),256))],544),[[v,l.doorForm.door_type]]),J])])]),K,o("tr",null,[o("td",null,[o("div",Q,[o("div",X,[a(o("input",{type:"number",min:"0",onInvalid:e[4]||(e[4]=t=>i.alert("Вы не выбрали  ввели высоту двери!")),"onUpdate:modelValue":e[5]||(e[5]=t=>l.doorForm.height=t),class:"form-control",id:"floatingInput",required:""},null,544),[[g,l.doorForm.height]]),Y]),$,o("ul",oo,[o("li",null,[o("a",{class:"dropdown-item",href:"javascript:void(0)",onClick:e[6]||(e[6]=t=>i.selectDoorSize(null))},"Не выбрано")]),to,o("li",eo,[o("div",lo,[a(o("input",{type:"search","onUpdate:modelValue":e[7]||(e[7]=t=>l.filterHeight=t),class:"form-control",id:"filtered-height",placeholder:"name@example.com"},null,512),[[g,l.filterHeight]]),ro])]),io,o("li",so,[(s(!0),n(_,null,f(i.filteredHeight,t=>(s(),n("a",{class:b(["dropdown-item",{"bg-primary":l.doorForm.width===t.width&&l.doorForm.width===t.height}]),onClick:u=>i.selectDoorSize(t),href:"javascript:void(0)"},c(t.height)+"x"+c(t.width),11,no))),256)),i.filteredHeight.length===0?(s(),n("p",ao,"Ничего не найдено")):m("",!0)])])])])]),o("tr",null,[o("td",null,[o("div",co,[o("div",ho,[a(o("input",{type:"number",min:"0",onInvalid:e[8]||(e[8]=t=>i.alert("Вы не выбрали  ввели ширину двери!")),"onUpdate:modelValue":e[9]||(e[9]=t=>l.doorForm.width=t),class:"form-control",id:"floatingInput",required:""},null,544),[[g,l.doorForm.width]]),_o]),uo,o("ul",fo,[o("li",null,[o("a",{class:"dropdown-item",href:"javascript:void(0)",onClick:e[10]||(e[10]=t=>i.selectDoorSize(null))},"Не выбрано")]),po,o("li",mo,[o("div",go,[a(o("input",{type:"search","onUpdate:modelValue":e[11]||(e[11]=t=>l.filterWidth=t),class:"form-control",id:"filtered-height",placeholder:"name@example.com"},null,512),[[g,l.filterWidth]]),vo])]),bo,o("li",yo,[(s(!0),n(_,null,f(i.filteredWidth,t=>(s(),n("a",{class:b(["dropdown-item",{"bg-primary text-white":l.doorForm.width===t.width&&l.doorForm.width===t.height}]),onClick:u=>i.selectDoorSize(t),href:"javascript:void(0)"},c(t.height)+"x"+c(t.width),11,Fo))),256)),i.filteredWidth.length===0?(s(),n("p",ko,"Ничего не найдено")):m("",!0)])])])])]),o("tr",null,[o("td",null,[o("div",wo,[o("button",{type:"button",onClick:e[12]||(e[12]=t=>i.changeDoorCount("sub")),class:"btn btn-dark rounded-0 mr-2 px-3"},Co),o("div",Do,[a(o("input",{type:"number",onInvalid:e[13]||(e[13]=t=>i.alert("Вы не указали количество дверей")),"onUpdate:modelValue":e[14]||(e[14]=t=>l.doorForm.count=t),min:"1",value:"1",class:"form-control rounded-0 text-center"},null,544),[[g,l.doorForm.count]])]),o("button",{type:"button",onClick:e[15]||(e[15]=t=>i.changeDoorCount("add")),class:"btn btn-dark rounded-0 ml-2 px-3"},So)])])]),o("tr",null,[o("td",null,[o("div",Vo,[a(o("select",{class:"form-select","onUpdate:modelValue":e[16]||(e[16]=t=>l.doorForm.opening_type=t),onInvalid:e[17]||(e[17]=t=>i.alert("Вы не выбрали вариант открывания и толщину двери!")),id:"floatingSelect","aria-label":"Floating label select example",required:""},[Mo,(s(!0),n(_,null,f(r.getDictionary.opening_variants,t=>(s(),n("option",{value:t},c(t.title)+" (толщина "+c(t.depth)+" мм) ",9,Io))),256))],544),[[v,l.doorForm.opening_type]]),Po])])]),o("tr",null,[o("td",null,[o("div",zo,[o("div",Uo,[a(o("select",{class:"form-select",onInvalid:e[18]||(e[18]=t=>i.alert("Вы не выбрали отделку первой стороны двери!")),"onUpdate:modelValue":e[19]||(e[19]=t=>l.doorForm.front_side_finish=t),id:"floatingSelect","aria-label":"Floating label select example",required:""},[Eo,(s(!0),n(_,null,f(r.getDictionary.finishes_variants,t=>(s(),n("option",{value:t},c(t.title),9,qo))),256))],544),[[v,l.doorForm.front_side_finish]]),Bo]),(l.doorForm.front_side_finish.door_variants||[]).length!==0?(s(),n("button",{key:0,onClick:e[20]||(e[20]=(...t)=>i.selectFrontSideFinish&&i.selectFrontSideFinish(...t)),class:"btn btn-outline-secondary rounded-0",type:"button"},Wo)):m("",!0)]),i.priceForSide("front_side_finish")===0?(s(),n("p",To,Ao)):m("",!0)])]),o("tr",null,[o("td",null,[o("div",Ro,[i.isHex(l.doorForm.front_side_finish_color.title)?(s(),n("span",{key:0,class:"input-group-text border-secondary",style:w([{"background-color":l.doorForm.front_side_finish_color.title},{width:"40px","border-radius":"0px"}]),id:"basic-addon1"},null,4)):m("",!0),o("div",Lo,[a(o("input",{type:"text","onUpdate:modelValue":e[21]||(e[21]=t=>l.doorForm.front_side_finish_color.title=t),onInvalid:e[22]||(e[22]=t=>i.alert("Вы не указали лицевую отделку двери!")),class:"form-control",id:"front_side_finish_color",required:""},null,544),[[g,l.doorForm.front_side_finish_color.title]]),No]),Go,o("ul",Zo,[o("li",null,[o("a",{class:"dropdown-item",href:"javascript:void(0)",onClick:e[23]||(e[23]=t=>l.doorForm.front_side_finish_color={title:null})},"Не выбрано")]),Jo,o("li",null,[(s(!0),n(_,null,f(i.filteredSideFinishColors,t=>(s(),n("a",{class:b(["dropdown-item",{"bg-primary text-white":l.doorForm.front_side_finish_color.title===t.title}]),onClick:u=>i.selectColor("front_side_finish_color",t),href:"javascript:void(0)"},c(t.title),11,Ko))),256))])])])])]),o("tr",null,[o("td",null,[o("div",Qo,[o("div",Xo,[a(o("select",{class:"form-select",onInvalid:e[24]||(e[24]=t=>i.alert("Вы не выбрали отделку второй стороны двери!")),"onUpdate:modelValue":e[25]||(e[25]=t=>l.doorForm.back_side_finish=t),id:"floatingSelect","aria-label":"Floating label select example",required:""},[Yo,(s(!0),n(_,null,f(r.getDictionary.finishes_variants,t=>(s(),n("option",{value:t},c(t.title),9,$o))),256))],544),[[v,l.doorForm.back_side_finish]]),ot]),(l.doorForm.back_side_finish.door_variants||[]).length!==0?(s(),n("button",{key:0,onClick:e[26]||(e[26]=(...t)=>i.selectBackSideFinish&&i.selectBackSideFinish(...t)),class:"btn btn-outline-secondary rounded-0",type:"button"},et)):m("",!0)]),i.priceForSide("back_side_finish")===0?(s(),n("p",lt,it)):m("",!0)])]),o("tr",null,[o("td",null,[o("div",st,[i.isHex(l.doorForm.back_side_finish_color.title)?(s(),n("span",{key:0,class:"input-group-text border-secondary",style:w([{"background-color":l.doorForm.back_side_finish_color.title},{width:"40px","border-radius":"0"}]),id:"basic-addon1"},null,4)):m("",!0),o("div",nt,[a(o("input",{type:"text",onInvalid:e[27]||(e[27]=t=>i.alert("Вы не указали внутреннюю отделку двери!")),"onUpdate:modelValue":e[28]||(e[28]=t=>l.doorForm.back_side_finish_color.title=t),class:"form-control",id:"back_side_finish_color",required:""},null,544),[[g,l.doorForm.back_side_finish_color.title]]),dt]),at,o("ul",ct,[o("li",null,[o("a",{class:"dropdown-item",href:"javascript:void(0)",onClick:e[29]||(e[29]=t=>l.doorForm.back_side_finish_color={title:null})},"Не выбрано")]),ht,o("li",null,[(s(!0),n(_,null,f(i.filteredSideFinishColors,t=>(s(),n("a",{class:b(["dropdown-item",{"bg-primary text-white":l.doorForm.back_side_finish_color.title===t.title}]),onClick:u=>i.selectColor("back_side_finish_color",t),href:"javascript:void(0)"},c(t.title),11,_t))),256))])])])])]),o("tr",null,[o("td",null,[o("div",ut,[i.isHex(l.doorForm.fittings_color.title)?(s(),n("span",{key:0,class:"input-group-text border-secondary",style:w([{"background-color":l.doorForm.fittings_color.title},{width:"40px","border-radius":"0px"}]),id:"basic-addon1"},null,4)):m("",!0),o("div",ft,[a(o("input",{type:"text",onInvalid:e[30]||(e[30]=t=>i.alert("Вы не выбрали цвет фурнитуры")),"onUpdate:modelValue":e[31]||(e[31]=t=>l.doorForm.fittings_color.title=t),class:"form-control",id:"fittings_color",required:""},null,544),[[g,l.doorForm.fittings_color.title]]),pt]),mt,o("ul",gt,[o("li",null,[o("a",{class:"dropdown-item",href:"javascript:void(0)",onClick:e[32]||(e[32]=t=>l.doorForm.fittings_color={title:null})},"Не выбрано")]),vt,o("li",null,[(s(!0),n(_,null,f(i.filteredFittingsColors,t=>(s(),n("a",{class:b(["dropdown-item",{"bg-primary text-white":l.doorForm.fittings_color.title===t.title}]),onClick:u=>i.selectColor("fittings_color",t),href:"javascript:void(0)"},c(t.title),11,bt))),256))])])])])]),o("tr",null,[o("td",null,[o("div",yt,[a(o("select",{class:"form-select","onUpdate:modelValue":e[33]||(e[33]=t=>l.doorForm.loops=t),onInvalid:e[34]||(e[34]=t=>i.alert("Вы не выбрали сторону петель!")),id:"floatingSelect","aria-label":"Floating label select example",required:""},[Ft,(s(!0),n(_,null,f(r.getDictionary.loops_variants,t=>(s(),n("option",{value:t},c(t.title),9,kt))),256))],544),[[v,l.doorForm.loops]]),wt])])]),o("tr",null,[o("td",null,[o("div",xt,[a(o("input",{class:"form-check-input","onUpdate:modelValue":e[35]||(e[35]=t=>l.doorForm.need_upper_jumper=t),type:"checkbox",role:"switch",id:"need-upper-jumper",checked:""},null,512),[[y,l.doorForm.need_upper_jumper]]),Ct])])]),Dt,o("tr",null,[o("td",null,[o("div",jt,[a(o("select",{class:"form-select","onUpdate:modelValue":e[36]||(e[36]=t=>l.doorForm.hinge_manufacturer=t),onInvalid:e[37]||(e[37]=t=>i.alert("Вы не выбрали расположение петель!")),id:"floatingSelect","aria-label":"Floating label select example",required:""},[St,(s(!0),n(_,null,f(r.getDictionary.hinge_manufacturer_variants,t=>(s(),n("option",{value:t},c(t.title),9,Vt))),256))],544),[[v,l.doorForm.hinge_manufacturer]]),Mt])])]),o("tr",null,[o("td",null,[o("div",It,[a(o("select",{class:"form-select",onInvalid:e[38]||(e[38]=t=>i.alert("Вы не выбрали отверстие под ручку!")),"onUpdate:modelValue":e[39]||(e[39]=t=>l.doorForm.handle_holes=t),id:"floatingSelect","aria-label":"Floating label select example",required:""},[(s(!0),n(_,null,f(r.getDictionary.handle_holes_variants,t=>(s(),n("option",{value:t},c(t.title),9,Pt))),256))],544),[[v,l.doorForm.handle_holes]]),zt])])]),o("tr",null,[o("td",null,[o("div",Ut,[a(o("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":e[40]||(e[40]=t=>l.doorForm.need_automatic_doorstep=t),role:"switch",id:"need-automatic-doorstep",checked:""},null,512),[[y,l.doorForm.need_automatic_doorstep]]),Et])])]),o("tr",null,[o("td",null,[o("div",qt,[a(o("input",{class:"form-check-input",type:"checkbox",role:"switch","onUpdate:modelValue":e[41]||(e[41]=t=>l.doorForm.need_hidden_stopper=t),id:"need-hidden-stopper",checked:""},null,512),[[y,l.doorForm.need_hidden_stopper]]),Bt])])]),o("tr",null,[o("td",null,[o("div",Ht,[a(o("input",{class:"form-check-input","onUpdate:modelValue":e[42]||(e[42]=t=>l.doorForm.need_hidden_door_closer=t),type:"checkbox",role:"switch",id:"need-hidden-door-closer",checked:""},null,512),[[y,l.doorForm.need_hidden_door_closer]]),Wt])])]),o("tr",null,[o("td",null,[o("div",Tt,[a(o("select",{class:"form-select","onUpdate:modelValue":e[43]||(e[43]=t=>l.doorForm.price_type=t),onInvalid:e[44]||(e[44]=t=>i.alert("Вы не выбрали тип цены!")),id:"door-type","aria-label":"door-type",required:""},[Ot,(s(!0),n(_,null,f(r.getDictionary.price_type_variants,t=>(s(),n("option",{value:t},c(t.title),9,At))),256))],544),[[v,l.doorForm.price_type]]),Rt])])]),o("tr",null,[o("td",null,[o("div",Lt,[a(o("input",{type:"number",min:"0",onInvalid:e[45]||(e[45]=t=>i.alert("Вы не ввели процент дилера!")),"onUpdate:modelValue":e[46]||(e[46]=t=>l.doorForm.dealer_percent=t),class:"form-control text-center",id:"floatingInput",required:""},null,544),[[g,l.doorForm.dealer_percent]]),Nt])])])])])}const D=z(U,[["render",Gt]]),Zt={class:"row"},Jt=V('<div class="col-md-4"><table class="table table-striped"><thead><th>Номер двери</th></thead><tbody><tr><td>Стоимость за единицу</td></tr><tr><td>Итого за 1 двери</td></tr><tr><td>Тип двери</td></tr><tr><td>Размер двери по прайсу</td></tr><tr><td>высота</td></tr><tr><td>ширина</td></tr><tr><td>Количество дверей</td></tr><tr><td>открывание</td></tr><tr><td>Отделка с передней стороны</td></tr><tr><td>укажите RAL</td></tr><tr><td>Отделка с задней стороны</td></tr><tr><td>укажите RAL</td></tr><tr><td>Цвет фурнитуры</td></tr><tr><td>петли</td></tr><tr><td>Верхняя перемычка</td></tr><tr><td>Растояние без верх перемычки: от верха двери до потолка (стандарт 5мм)</td></tr><tr><td>Производитель петель</td></tr><tr><td>Отверстий под ручку (тип ручки влияет)</td></tr><tr><td>Автоматический порог</td></tr><tr><td>Скрытый стопор</td></tr><tr><td>Скрытый доводчик</td></tr><tr><td>Тип цены</td></tr><tr><td>Дополнительно добавить к цене за дверь</td></tr></tbody></table></div>',1),Kt={class:"col-md-8"},Qt={class:"overflow"},Xt={name:"MyComponent",data(){return{need_addition:!0,messages:[],filterHeight:null,filterWidth:null,selectedColorParam:null,colorModal:null,confirmModal:null,finishFrontVariantModal:null,finishBackVariantModal:null,colors:[],confirm:{title:null,message:null},doorForm:{id:null,width:0,height:0,depth:0,count:1,price:0,size:null,purpose:null,comment:null,dealer_percent:0,opening_type:{title:null},box_and_frame_color:{title:null},door_type:{title:null},front_side_finish:{title:null},back_side_finish:{title:null},front_side_finish_color:{title:null},back_side_finish_color:{title:null},seal_color:{title:null},fittings_color:{title:null},loops:{title:null},loops_count:0,price_type:{title:null},hinge_manufacturer:{title:null},handle_holes:{title:null},handle_holes_type:{title:null},need_handle_holes:!0,need_upper_jumper:!1,need_automatic_doorstep:!1,need_hidden_stopper:!1,need_hidden_door_closer:!1,need_hidden_skirting_board:!1,need_door_install:!1,need_wrapper:!1}}},computed:{...j(["getDictionary","cartTotalCount","cartProducts","cartTotalPrice"])},mounted(){},methods:{}},Yt=Object.assign(Xt,{setup(r){return(e,d)=>(s(),n("div",Zt,[Jt,o("div",Kt,[o("div",Qt,[k(D),(s(!0),n(_,null,f(e.cartProducts,h=>(s(),x(D,{door:h},null,8,["door"]))),256))])])]))}}),$t={class:"nav nav-tabs mb-3"},oe={class:"nav-item"},te={class:"nav-item"},ee={data(){return{tab:0}}},le=Object.assign(ee,{__name:"CalcSwitch",setup(r){return(e,d)=>(s(),n(_,null,[o("ul",$t,[o("li",oe,[o("a",{class:b(["nav-link rounded-0",{active:e.tab===0}]),onClick:d[0]||(d[0]=h=>e.tab=0),"aria-current":"page",href:"javascript:void(0)"},"Версия 1",2)]),o("li",te,[o("a",{class:b(["nav-link rounded-0",{active:e.tab===1}]),onClick:d[1]||(d[1]=h=>e.tab=1),href:"javascript:void(0)"},"Версия 2",2)])]),e.tab===0?(s(),x(P,{key:0})):m("",!0),e.tab===1?(s(),x(Yt,{key:1})):m("",!0)],64))}}),re=o("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"},"Главная",-1),ie={class:"py-12"},se={class:"max-w-10xl mx-auto sm:px-6 lg:px-8"},ne={class:"bg-white overflow-hidden shadow-sm rounded-0"},de={class:"p-6 text-gray-900"},pe={__name:"Dashboard",setup(r){return(e,d)=>(s(),n(_,null,[k(M(I),{title:"Главная"}),k(S,null,{header:C(()=>[re]),default:C(()=>[o("div",ie,[o("div",se,[o("div",ne,[o("div",de,[k(le)])])])])]),_:1})],64))}};export{pe as default};