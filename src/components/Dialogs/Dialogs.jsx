import React from 'react'
import d from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';

const DialogsItem = (props) => {
    let path = "/dialogs/" + props.id;
    return(<div>
            <NavLink className={d.idDialog} to={path}>
                <div>
                    <img className={d.photoId} src="./public/content/imgName2.jpg"/>
                </div>
                <div className={d.contentMessage}>
                    <p className={d.nameId}>{props.name}</p>
                    <p className={d.messageInfa}>{props.msgMin}...</p>
                </div>
            </NavLink>
        </div>
    )
}

const MsgItem = (props) => {
    return (
        <div className={d.msg}>
            <div className={d.blockId}>
                <img className={d.msgImg} src="#"/>
                <p>{props.name}</p>
            </div>
            <div className={d.blockMessage}>
                <p>{props.textMsg}</p>
            </div>
        </div>
    )
}

const Dialogs = () => {
    let dialogsData = [
        {id: 1, name: 'Lumaks', msgMin: 'Война - это мир,'},
        {id: 2, name: 'Lumaks', msgMin: 'Is that a'},
        {id: 3, name: 'Lumaks', msgMin: 'Уверена, что нам'},
        {id: 4, name: 'Lumaks', msgMin: 'Народ, вы где? a'},
        {id: 5, name: 'Lumaks', msgMin: 'Война - это мир,'},
        {id: 6, name: 'Lumaks', msgMin: 'Что значит не зан'},
    ]

    let messagesData = [
        {id: 1, name: 'Lumaks', textMsg: 'Hey, Professor. I need brain food.'},
        {id: 2, name: 'Arkein', textMsg: "I think you're thinking too much."},
        {id: 3, name: 'Lumaks', textMsg: 'Is that a bad thing?'},
    ]
    return <div className={d.blockDialogs}>
        <div className={d.dialog}>
            <DialogsItem />
            <div className={d.active}>
                <DialogsItem />
            </div>
            <DialogsItem />
            <DialogsItem />
            <DialogsItem />
        </div>
        <div className={d.blockInputMsg}>
            <div className={d.messages}>
                <MsgItem />
                <MsgItem />
            </div>
            <div className={d.blockInputMsg}>
                <input className={d.inputField}/>
                <div className={d.blockBtn}>
                    <button className={d.btnFile + ' ' + d.btn}><img src="./public/content/messageFileIco.png" className={d.btnFile}/></button>
                    <button className={d.btnMsg + ' ' + d.btn}><img src="./public/content/btnMessage.png" className={d.btnMsg}/></button>
                </div>
            </div>
        </div>
    </div>
} 

export default Dialogs;