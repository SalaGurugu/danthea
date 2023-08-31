import{o as i,c as d,a as o,t as u,m as S,F as k,k as U,u as w,l as I,n as B,p as y,q as C,g as h,h as E,s as f,v as V,x as v,y as p,z as N,j as m,A as R,d as A,f as r,B as s,C as _,D,E as g,N as F}from"./index-edcc7462.js";const T={class:"container"},q={class:"mb-3"},z={class:"form-label"},L=["placeholder","value"],c={__name:"BaseInput",props:{label:{type:String,default:""},modelValue:{type:[String,Number],default:""}},setup(l){return(e,n)=>(i(),d("div",T,[o("div",q,[o("label",z,u(l.label),1),o("input",{type:"text",class:"form-control",placeholder:l.label,value:l.modelValue,onInput:n[0]||(n[0]=t=>e.$emit("update:modelValue",t.target.value))},null,40,L)])]))}},j={class:"container"},M={class:"mb-3"},G={class:"form-label"},P=["placeholder","value"],H={__name:"BaseInputDate",props:{label:{type:String,default:""},modelValue:{type:[Date,String,Number],default:""}},setup(l){return(e,n)=>(i(),d("div",j,[o("div",M,[o("label",G,u(l.label),1),o("input",{type:"date",class:"form-control",placeholder:l.label,value:l.modelValue,onInput:n[0]||(n[0]=t=>e.$emit("update:modelValue",t.target.value))},null,40,P)])]))}},J={class:"container"},K={class:"mb-3"},O={class:"form-label"},Q=["placeholder","value"],W={__name:"BaseTextArea",props:{label:{type:String,default:""},modelValue:{type:[String,Number],default:""}},setup(l){return(e,n)=>(i(),d("div",J,[o("div",K,[o("label",O,u(l.label),1),o("textarea",{type:"text",class:"form-control",placeholder:l.label,value:l.modelValue,onInput:n[0]||(n[0]=t=>e.$emit("update:modelValue",t.target.value)),rows:"3"},null,40,Q)])]))}},X={class:"container"},Y={class:"mb-3"},Z={class:"form-label"},ee=["value"],te=["value","selected"],ae={__name:"BaseSeleccion",props:{opciones:{type:Array,required:!0},label:{type:String,default:""},modelValue:{type:[String,Number],default:""}},setup(l){return(e,n)=>(i(),d("div",X,[o("div",Y,[o("label",Z,u(l.label),1),o("select",S({class:"form-select",value:l.modelValue},{...e.$attrs,onChange:t=>{e.$emit("update:modelValue",t.target.value)}}),[(i(!0),d(k,null,U(l.opciones,t=>(i(),d("option",{value:t,key:t,selected:t===l.modelValue},u(t),9,te))),128))],16,ee)])]))}},$=w(),oe=I({id:"principal",state:()=>({file:null,datoImagen:null,error:null,editar:!1,loading:!1,urlDescarga:"",ages:["2 anos","3 anos","4 anos","Todas as idades","Recomendado para adultos"],obras:[],obra:{id:"",title:"",company:"",director:"",cast:"",synopsis:"",date:"",link:"",age:"",time:"",photo:""}}),actions:{async obtenerDatos(){this.obras=[],(await B(y(m,"obras"))).forEach(e=>{let n=e.data();n.id=e.id,this.obras.push(n),console.log(n)})},async eliminarDato(l){await C(h(m,"obras",l)),$.go("/")},async obtenerDatoID(l){const e=h(m,"obras",l),n=await E(e);n.exists()?(this.obra=n.data(),this.obra.id=n.id):console.log("¡No existe el documento!")},buscarImagen(l){const e=l.target.files[0].type;if(e==="image/jpeg"||e==="image/png")this.file=l.target.files[0],this.error=null;else{this.error="Archivo no válido",this.file=null;return}const n=new FileReader;n.readAsDataURL(this.file),n.onload=t=>{this.datoImagen=t.target.result}},async agregarDato(){try{this.loading=!0;const l=f(V,"imagenes/"+this.file.name),e=v(l,this.file);e.on("state_changed",t=>{const a=t.bytesTransferred/t.totalBytes*100;switch(console.log("Upload is "+a+"% done"),t.state){case"paused":console.log("Upload is paused");break;case"running":console.log("Upload is running");break}},t=>{},()=>{p(e.snapshot.ref).then(t=>{console.log("File available at",t)})});const n=await p(l);await N(y(m,"obras"),{title:this.obra.title,company:this.obra.company,director:this.obra.director,cast:this.obra.cast,synopsis:this.obra.synopsis,age:this.obra.age,link:this.obra.link,time:this.obra.time,date:this.obra.date,photo:n}),this.error="Imagen subida con éxito",this.file=null}catch(l){console.log(l)}finally{w().push("/"),this.loading=!1}},async actualizarDato(){try{this.loading=!0;const l=f(V,"imagenes/"+this.file.name),e=v(l,this.file);e.on("state_changed",a=>{const b=a.bytesTransferred/a.totalBytes*100;switch(console.log("Upload is "+b+"% done"),a.state){case"paused":console.log("Upload is paused");break;case"running":console.log("Upload is running");break}},a=>{},()=>{p(e.snapshot.ref).then(a=>{console.log("File available at",a)})});const n=await p(l),t=h(m,"obras",this.obra.id);await R(t,{title:this.obra.title,company:this.obra.company,director:this.obra.director,cast:this.obra.cast,synopsis:this.obra.synopsis,age:this.obra.age,link:this.obra.link,time:this.obra.time,date:this.obra.date,photo:n}),this.error="Imagen subida con éxito",this.file=null}catch(l){console.log(l)}finally{$.push("/"),this.loading=!1}}}}),le={class:"container my-4"},se={class:"input-group my-3"},ne={class:"mt-3"},re={class:"mt-4"},ie=["src"],de={class:"table"},ue=o("thead",null,[o("tr",null,[o("th",{scope:"col"},"id"),o("th",{scope:"col"},"Author"),o("th",{scope:"col"},"Fecha"),o("th",{scope:"col"},"Editar"),o("th",{scope:"col"},"Eliminar")])],-1),ce={scope:"row"},me=["onClick"],be=["onClick"],ge={__name:"Formulario",setup(l){const e=oe();return A(()=>{e.obtenerDatos()}),(n,t)=>(i(),d("div",null,[r(F),o("div",le,[o("form",null,[r(c,{modelValue:s(e).obra.company,"onUpdate:modelValue":t[0]||(t[0]=a=>s(e).obra.company=a),type:"text",label:"Compañia"},null,8,["modelValue"]),r(c,{modelValue:s(e).obra.title,"onUpdate:modelValue":t[1]||(t[1]=a=>s(e).obra.title=a),type:"text",label:"Título"},null,8,["modelValue"]),r(c,{modelValue:s(e).obra.director,"onUpdate:modelValue":t[2]||(t[2]=a=>s(e).obra.director=a),type:"text",label:"Director"},null,8,["modelValue"]),r(c,{modelValue:s(e).obra.cast,"onUpdate:modelValue":t[3]||(t[3]=a=>s(e).obra.cast=a),type:"text",label:"Elenco"},null,8,["modelValue"]),r(W,{modelValue:s(e).obra.synopsis,"onUpdate:modelValue":t[4]||(t[4]=a=>s(e).obra.synopsis=a),type:"text",label:"Descripción"},null,8,["modelValue"]),r(c,{modelValue:s(e).obra.link,"onUpdate:modelValue":t[5]||(t[5]=a=>s(e).obra.link=a),type:"text",label:"Enlace"},null,8,["modelValue"]),r(ae,{modelValue:s(e).obra.age,"onUpdate:modelValue":t[6]||(t[6]=a=>s(e).obra.age=a),opciones:s(e).ages,label:"Selecciona una categoría"},null,8,["modelValue","opciones"]),r(c,{modelValue:s(e).obra.time,"onUpdate:modelValue":t[7]||(t[7]=a=>s(e).obra.time=a),type:"text",default:"60 minutos",label:"Duración"},null,8,["modelValue"]),r(H,{modelValue:s(e).obra.date,"onUpdate:modelValue":t[8]||(t[8]=a=>s(e).obra.date=a),type:"date",label:"Fecha"},null,8,["modelValue"]),r(c,{modelValue:s(e).obra.photo,"onUpdate:modelValue":t[9]||(t[9]=a=>s(e).obra.photo=a),type:"text",label:"Imagen"},null,8,["modelValue"]),o("div",se,[o("input",{type:"file",onChange:t[10]||(t[10]=a=>s(e).buscarImagen(a))},null,32)]),o("div",ne,[_(o("button",{onClick:t[11]||(t[11]=g(a=>s(e).actualizarDato(n.id),["prevent"])),class:"btn btn-primary"}," Actualizar ",512),[[D,s(e).editar===!0]]),_(o("button",{onClick:t[12]||(t[12]=g(a=>s(e).agregarDato(),["prevent"])),class:"btn btn-primary"}," Guardar ",512),[[D,s(e).editar===!1]]),o("div",re,[o("img",{src:s(e).datoImagen},null,8,ie)])])])]),o("table",de,[ue,o("tbody",null,[(i(!0),d(k,null,U(s(e).obras,(a,b)=>(i(),d("tr",{key:b},[o("th",ce,u(b),1),o("td",null,u(a.company),1),o("td",null,u(a.date),1),o("td",null,[o("button",{onClick:g(x=>{s(e).obtenerDatoID(a.id),this.datos.editar=!this.datos.editar},["prevent"]),class:"btn btn-primary"},"Editar ",8,me)]),o("td",null,[o("button",{onClick:g(x=>s(e).eliminarDato(a.id),["prevent"]),class:"btn btn-danger"},"Eliminar ",8,be)])]))),128))])])]))}};export{ge as default};
