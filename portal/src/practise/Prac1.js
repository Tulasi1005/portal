function Dum1(a){
    return (
        <h3> {a**2} </h3>
    )
}

export default function Prac1(){
    const elem1 = <h1> Hello {/*This*/} is explaining about expression {5**3}</h1>
    const input1 = 'hello'

    return(
        <>
        {elem1}
        {input1}
        {Dum1()}
        <h3 className={input1}>Hello</h3>
        </>
    )
}
