
const Button = ({btntype,btnText,handler}) => {
  if(btntype ==="success"){
    return <button
   className="btn btn-success button" onClick ={handler}>{btnText}</button>;
  }
  else if(btntype ==="danger"){
  return <button 
   className="btn btn-danger button" onClick= {handler}>{btnText}</button>;
}
else{
  return <button className="btn btn-primary button" onClick={handler}>{btnText}</button>;
}
};
export default Button;
