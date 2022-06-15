export default function Header(props){
  return(
    <div>
      <h1 className=" px-3 text-blue display-4 text-right">{props.header}</h1>
    </div>
  )
}