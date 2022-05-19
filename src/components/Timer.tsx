import { Fragment, useEffect, useRef, useState } from "react";

type TimerArgs = {
    milisegundos: number,
}

export default function Timer({milisegundos}: TimerArgs) {

    const [segundos, setSegundos] = useState(0);
    const ref = useRef<NodeJS.Timeout>(); // ref por defecto tiene valor undefine


    useEffect(() => {
        ref.current && clearInterval(ref.current);
     ref.current = setInterval(() => setSegundos(seg => seg + 1), milisegundos);
    }, [milisegundos]);
    

  return (
<Fragment>
    <h4>Timer:
        <small> {segundos} </small>
    </h4>
</Fragment>  )
}
