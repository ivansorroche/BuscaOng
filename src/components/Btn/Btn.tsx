export default function Btn(props: any){

    function btnFunction() {
            props.actionButton(props.type)
    }

    return (

        <button type="button" className="btn btn-primary" onClick={() => btnFunction()}>{props.label}</button>
 
    )
}