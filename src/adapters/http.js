const demo = true;
import data from "../mockdata";


const httpReq = (url,options={})=>{
  if(demo) {
    return new Promise(resolve=>window.setTimeout(()=>resolve(data[url]),500));
  }else{
    return window.fetch(url,options).then(r=>r.json).catch(()=>null)
  }
}

export default httpReq