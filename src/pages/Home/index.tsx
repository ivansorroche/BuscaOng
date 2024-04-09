import React, { useState } from 'react'
import styles from './styles.module.scss'
import Btn from '@/components/Btn/Btn'
import { Ong } from '@/model/ong'

export default function BuscaOng() {
    const [current, setCurrent] = React.useState<Ong>({
        cep: '',
        name: ''
    })

    function actionButton(i: String) {
        console.log('oi')
        if (i === 'clean') {
            setCurrent({...current , cep: ''})
        } else {
            alert('CHAMAR API DE BUSCA')
        }
    }

    return (
        <div className={`${styles.main} text-center`}>
            <h1 >Pesquise entidades cadastradas em sua Região</h1> <br />
            <h3 > Informe o seu CEP ou use sua localização, mostraremos a entidade mais proxima de você!</h3><br /><br />
                       
            <input title='teste' onChange={(e) => setCurrent({...current, cep: e.target.value})} value={current.cep}>
            </input><br/>
            {/* <input title='multi select'></input> <br></br> */}
            
            <Btn className="ml-2" label={'Apagar Cep'} type='clean' actionButton={actionButton}/>
            <Btn label={'Buscar'} type='send' actionButton={actionButton}/>

        </div>
    )
}