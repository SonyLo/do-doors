import{_ as p}from"./AuthenticatedLayout-B3v_jJKP.js";import{m as h,o as s,c as o,b as t,t as n,f as c,e as r,F as f,r as b,i as y,C as g,a as _,u as v,w as m,Z as x}from"./app-DgP2XU_d.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./ApplicationLogo-C797Ui3t.js";const w={props:["item"],computed:{...h(["getDictionary"])},methods:{removeProduct(){this.$store.dispatch("removeProduct",this.item.product.id)},changeQuantityProductInCart(a="increment"){let i=a==="increment"?this.item.quantity+1:this.item.quantity-1;if(i===0){this.$store.dispatch("removeProduct",this.item.product.id);return}this.$store.dispatch("setQuantity",{id:this.item.product.id,quantity:i})}}},C={class:"row mb-4 d-flex justify-content-between align-items-center"},P={class:"col-md-5 col-lg-5 col-xl-5"},T={class:"text-muted font-bold"},j={class:"text-black mb-0"},q={key:0},E={key:1,class:"ml-1"},N={key:2,class:"ml-1"},S={key:3},V={key:4,class:"ml-1"},F={key:5,class:"ml-1"},I={key:6,class:"ml-1"},Q={key:7,class:"ml-1"},B={key:8,class:"ml-1"},D={key:9,class:"ml-1"},$={key:10,class:"ml-1"},G={key:11,class:"ml-1"},O={key:12,class:"ml-1"},L={key:13,class:"ml-1"},M={key:14,class:"ml-1"},Z={key:15,class:"ml-1"},z={key:16,class:"ml-1"},A={class:"col-md-3 col-lg-3 col-xl-3 d-flex"},H=t("i",{class:"fas fa-minus"},null,-1),J=[H],K=["value"],R=t("i",{class:"fas fa-plus"},null,-1),U=[R],W={class:"col-md-3 col-lg-2 col-xl-2 offset-lg-1"},X={class:"mb-0"},Y={class:"col-md-1 col-lg-1 col-xl-1 text-end"},tt=t("i",{class:"fas fa-times"},null,-1),et=[tt];function st(a,i,e,l,Ft,d){return s(),o("div",C,[t("div",P,[t("h6",T,n(e.item.product.door_type.title)+" "+n(e.item.product.width)+"x"+n(e.item.product.height)+"x"+n(e.item.product.depth),1),t("h6",j,[e.item.product.box_and_frame_color.title?(s(),o("span",q,"("+n(e.item.product.box_and_frame_color.title)+")",1)):c("",!0),r(" лицо "),e.item.product.front_side_finish.title?(s(),o("span",E,n(e.item.product.front_side_finish.title),1)):c("",!0),r("/ "),e.item.product.back_side_finish.title?(s(),o("span",N,n(e.item.product.back_side_finish.title)+",",1)):c("",!0),r(" петли "),e.item.product.loops.title?(s(),o("span",S,n(e.item.product.loops.title)+",",1)):c("",!0),e.item.product.hinge_manufacturer.title?(s(),o("span",V,n(e.item.product.hinge_manufacturer.title)+",",1)):c("",!0),e.item.product.fittings_color.title?(s(),o("span",F,"("+n(e.item.product.fittings_color.title)+"),",1)):c("",!0),e.item.product.opening_type.title?(s(),o("span",I,n(e.item.product.opening_type.title)+",",1)):c("",!0),e.item.product.handle_holes.title?(s(),o("span",Q,n(e.item.product.handle_holes.title)+",",1)):c("",!0),e.item.product.need_automatic_doorstep?(s(),o("span",B," автоматический порожек,")):c("",!0),e.item.product.need_upper_jumper?(s(),o("span",D," верхняя перемычка,")):c("",!0),e.item.product.need_handle_holes?(s(),o("span",$," дверная ручка,")):c("",!0),e.item.product.handle_holes_type.title?(s(),o("span",G,n(e.item.product.handle_holes_type.title)+",",1)):c("",!0),e.item.product.handle_holes.title?(s(),o("span",O,n(e.item.product.handle_holes.title)+",",1)):c("",!0),e.item.product.need_hidden_door_closer?(s(),o("span",L," скрытый доводчик,")):c("",!0),e.item.product.need_hidden_skirting_board?(s(),o("span",M," скрытый плинтус,")):c("",!0),e.item.product.need_hidden_stopper?(s(),o("span",Z," скрытый стопор,")):c("",!0),e.item.product.need_door_install?(s(),o("span",z," установка двери")):c("",!0)])]),t("div",A,[t("button",{class:"btn btn-link px-2",type:"button",onClick:i[0]||(i[0]=u=>d.changeQuantityProductInCart("decrement"))},J),t("input",{id:"form1",min:"0",name:"quantity",value:e.item.quantity,type:"text",readonly:"",class:"form-control form-control-sm text-center border rounded-md"},null,8,K),t("button",{class:"btn btn-link px-2",type:"button",onClick:i[1]||(i[1]=u=>d.changeQuantityProductInCart("increment"))},U)]),t("div",W,[t("h6",X,n(e.item.quantity*(e.item.product.price||0))+" ₽",1)]),t("div",Y,[t("a",{href:"javascript:void(0)",onClick:i[2]||(i[2]=(...u)=>d.removeProduct&&d.removeProduct(...u)),class:"text-muted"},et)])])}const ot=k(w,[["render",st]]),it={class:"container h-100"},ct={class:"col-lg-8"},nt={class:"p-5"},lt={class:"d-flex justify-content-between align-items-center mb-5"},at=t("h1",{class:"fw-bold mb-0 text-black"},"Позиций товаров в корзине",-1),dt={class:"mb-0 text-muted"},rt=t("hr",{class:"my-4"},null,-1),_t=t("hr",{class:"my-4"},null,-1),ut=t("div",{class:"pt-5"},[t("h6",{class:"mb-0"},[t("a",{href:"#!",class:"text-body"},[t("i",{class:"fas fa-long-arrow-alt-left me-2"}),r("К калькулятору")])])],-1),mt={class:"col-lg-4 bg-grey"},ht={class:"p-5"},ft=t("h3",{class:"fw-bold mb-5 mt-2 pt-1"},"Суммарно",-1),pt=t("hr",{class:"my-4"},null,-1),bt={class:"d-flex justify-content-between mb-4"},yt={class:"text-uppercase"},gt=g('<h5 class="text-uppercase mb-3">Shipping</h5><div class="mb-4 pb-2"><select class="select"><option value="1">Standard-Delivery- €5.00</option><option value="2">Two</option><option value="3">Three</option><option value="4">Four</option></select></div><h5 class="text-uppercase mb-3">Give code</h5><div class="mb-5"><div class="form-outline"><input type="text" id="form3Examplea2" class="form-control form-control-lg"><label class="form-label" for="form3Examplea2">Enter your code</label></div></div><hr class="my-4">',5),vt={class:"d-flex justify-content-between mb-5"},xt=t("h5",{class:"text-uppercase fw-bold"},"Итого сумма",-1),kt={class:"fw-bold"},wt=t("button",{class:"btn btn-success w-100 btn-block btn-lg"}," Перейти к оформлению ",-1),Ct={computed:{...h(["getErrors","cartTotalCount","cartProducts","cartTotalPrice"])},methods:{goToCheckout(){this.$emit("callback")}}},Pt=Object.assign(Ct,{__name:"CartForm",setup(a){return(i,e)=>(s(),o("div",it,[t("form",{onSubmit:e[0]||(e[0]=y((...l)=>i.goToCheckout&&i.goToCheckout(...l),["prevent"])),class:"row g-0"},[t("div",ct,[t("div",nt,[t("div",lt,[at,t("h6",dt,n((i.cartProducts||[]).length)+" ед.",1)]),rt,(s(!0),o(f,null,b(i.cartProducts,l=>(s(),o("div",null,[_(ot,{item:l},null,8,["item"]),_t]))),256)),ut])]),t("div",mt,[t("div",ht,[ft,pt,t("div",bt,[t("h5",yt,"в корзине "+n(i.cartTotalCount)+" ед.",1),t("h5",null,n(i.cartTotalPrice)+"р.",1)]),gt,t("div",vt,[xt,t("h5",kt,n(i.cartTotalPrice)+" ₽",1)]),wt])])],32)]))}}),Tt=t("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"},"Корзина",-1),jt={class:"py-12"},qt={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},Et={class:"bg-white overflow-hidden shadow-sm sm:rounded-lg"},Nt={key:0,class:"p-6 text-gray-900"},St={key:1,class:"p-6 text-gray-900"},Vt={data(){return{tab:0}}},$t=Object.assign(Vt,{__name:"CartPage",setup(a){return(i,e)=>(s(),o(f,null,[_(v(x),{title:"Калькулятор"}),_(p,null,{header:m(()=>[Tt]),default:m(()=>[t("div",jt,[t("div",qt,[t("div",Et,[i.tab===0?(s(),o("div",Nt,[_(Pt,{onCallback:e[0]||(e[0]=l=>i.tab++)})])):c("",!0),i.tab===1?(s(),o("div",St)):c("",!0)])])])]),_:1})],64))}});export{$t as default};