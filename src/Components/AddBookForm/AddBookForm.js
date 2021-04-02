import React from 'react';
import {useState, useEffect, useRef} from 'react';
import {Input} from '../../Components/Common/Input/Input';
import {generatePages,generateYears} from '../../utils/utilsFunctions';
import classes from './addBookForm.module.css';
import {withRouter} from 'react-router-dom';
import bookStore from '../../Store/BooksStore';
import {toJS} from 'mobx';
import {Notification} from '../Common/Notification/Notification';

export default withRouter(function AddBookForm(props) {
    const [val,setVal] = useState({
        name: '',
        author: '',
        publisher: '',
        year: '',
        pages: '',
        image: '',
    });
    const [err, setErr] = useState('');
    const [notify,setNotify] = useState(false);

    const uploadRef = useRef(null);

    useEffect(() => {
        if (err !== '') {
            setTimeout(() => {
                setErr('');
            },2000)
        }
        if (notify) {
            setTimeout(() => {
                setNotify(false);
            },2000)
        };
    },[err,notify]);

    function handleChange(e) {
        setVal((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            };
        });
    };

    function handleSave(e) {
        e.preventDefault();
        const withoutImage = {};
        for(let key in val) {
            if (key === 'image') {
                continue
            } else {
                withoutImage[key] = val[key];
            }
        };
        const allEmpty = Object.values(withoutImage).some((el => el === ''));
        if (allEmpty) {
            setErr('все значения должны быть заполнены кроме картинки');
            return;
        } else {
            bookStore.addBook(val);
            setErr('');
            setNotify(true);
            setVal({
                name: '',
                author: '',
                publisher: '',
                year: '',
                pages: '',
                image: '',
            });
        }
    };

    function handleCancel() {
        const {history} = props;
        history.push('/')
    };

    /** Функция загрузки картинки тут должна быть отправка файла на сервер
     * методом пост а затем уже на серваке получить массив байтов и сохранить фото
     * так как этот проект делается без бэка то это просто муляж
     */
    function handleFileChange(e) {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append("image", file);
        fetch('/localhost',{
            method: "POST",
            body: formData
        })
    };

    function triggerFileLoad() {
        if (uploadRef.current) {
            uploadRef.current.click();
        } 
    };

    return (
        <form onSubmit={handleSave}>
            {err !== '' && <div className={classes.err}>{err}</div>}
            {notify && <Notification/>}
            <div className={classes.wrapper}>
                <Input
                inputType="text"
                onChange={handleChange}
                placeholder="Введите название книги"
                value={val.bookName}
                name="name"/>
                <Input
                inputType="text"
                onChange={handleChange}
                placeholder="Введите автора"
                value={val.author}
                name='author'/>
                <Input 
                inputType="text" 
                onChange={handleChange} 
                placeholder="Введите издательство"
                value={val.publisher}
                name="publisher"/>
                <Input 
                inputType="select"
                onChange={handleChange}
                placeholder="Выберите год"
                options={generateYears()}
                name="year"
                value={val.year}/>
                <Input 
                inputType="select" 
                onChange={handleChange} 
                placeholder="L" 
                options={generatePages()}
                name="pages"
                value={val.pages}/>
                <Input
                inputType="file" 
                onChange={handleFileChange}
                uploadRef={uploadRef}/>
                <button className={classes.uploadBtn} onClick={triggerFileLoad}>Выберите файл</button>
            </div>
            <div className={classes.buttonsWrapper}>
                <button className={classes.add} onClick={handleSave}>Добавить</button>
                <button className={classes.cancel} onClick={handleCancel}>Отмена</button>
            </div>
        </form>
    )
});
