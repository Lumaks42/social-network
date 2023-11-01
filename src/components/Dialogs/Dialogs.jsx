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

const Dialogs = (props) => {

    let dialogs = props.state.dlgData.map(dlg => <DlgItem name={dlg.name} id={dlg.id} msgMin={dlg.msgMin}/>)

    let messages = props.state.msgData.map(msg => <MsgItem name={msg.name} id={msg.id} textMsg={msg.textMsg}/>)

    return <div className={d.blockDialogs}>
        <div className={d.dialog }>
            {dialogs}
        </div>
        <div>
            <div className={d.messages}>
                <p className={d.msgNumDay}>09.14-23</p>
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