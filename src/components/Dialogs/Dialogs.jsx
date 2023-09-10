import React from 'react'
import d from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';

const DlgItem = (props) => {
    let path = "/dialogs/" + props.id;
    return(<div>
            <NavLink to={path} className={d.dlgLink}>
            <div className={d.idDialog}>
                <div>
                    <img className={d.photoId} src="./public/content/imgName2.jpg"/>
                </div>
                <div className={d.contentMessage}>
                    <p className={d.nameId}>{props.name}</p>
                    <p className={d.messageInfa}>{props.msgMin}...</p>
                </div>
            </div>
            </NavLink>
        </div>
    )
}

const MsgItem = (props) => {
    return (
        <div className={d.msg}>
            <div className={d.blockId}>
                <img className={d.msgImg} src="./public/content/imgName1.jpg"/>
                <p>{props.name}</p>
            </div>
            <div className={d.blockMessage}>
                <p>{props.textMsg}</p>
            </div>
        </div>
    )
}

const Dialogs = () => {
    let dlgData = [
        {id: 1, name: 'Lumaks', msgMin: 'Война - это мир,'},
        {id: 2, name: 'Arkein', msgMin: 'Is that a skaint '},
        {id: 3, name: 'Luksi', msgMin: 'Уверена, что нам'},
        {id: 4, name: 'Kain', msgMin: 'Народ, вы где? a'},
        {id: 5, name: 'Avele', msgMin: 'Мне кажется вы не'},
        {id: 6, name: 'Stocks', msgMin: 'Что значит не зан'},
    ]

    let msgData = [
        {id: 1, name: 'Lumaks', textMsg: 'Hey, Professor. I need brain food.'},
        {id: 2, name: 'Arkein', textMsg: "I think you're thinking too much."},
        {id: 3, name: 'Lumaks', textMsg: 'Is that a bad thing?'},
    ]

    let dialogs = dlgData.map(dlg => <DlgItem name={dlg.name} id={dlg.id} msgMin={dlg.msgMin}/>)

    let messages = msgData.map(msg => <MsgItem name={msg.name} id={msg.id} textMsg={msg.textMsg}/>)

    return <div className={d.blockDialogs}>
        <div className={d.dialog}>
            {dialogs}
        </div>
        <div>
            <div className={d.messages}>
                {messages}
            </div>
            <div className={d.blockInputMsg}>
                <textarea className={d.inputField}/>
                <div className={d.blockBtn}>
                    <button className={d.btnFile + ' ' + d.btn}><img src="./public/content/messageFileIco.png" className={d.btnFile}/></button>
                    <button className={d.btnMsg + ' ' + d.btn}><img src="./public/content/btnMessage.png" className={d.btnMsg}/></button>
                </div>
            </div>
        </div>
    </div>
} 

export default Dialogs;