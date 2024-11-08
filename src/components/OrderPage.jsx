import '../App.css'
import './orderPage.css'
import materials from '../MaterialsData'
import { NavLink, Label, Form, Input, FormGroup, Button } from 'reactstrap';
import Materials from './Materials';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import React from 'react';
import axios from 'axios';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

function OrderPage({ pizzaData,setChoosenOne }) {
    const navigate = useNavigate(); 

    const homePage = () => {
       
        navigate("/");
    }
    const orderPage = () => {
       
        navigate("/order");
    }
    const orderCompleted = () => {
       
        navigate("/order-completed");
    }
    
    const {isim,boyut,hamur,pizzaName,pizzaPrice,malzemeler,notext}=pizzaData;
    const orjPrice = parseFloat(pizzaPrice);
    const [price, setPrice] = useState(parseFloat(pizzaPrice))
    const [materialPrice, setMaterialPrice] = useState(parseFloat(0))
    const [datas, setDatas] = useState(pizzaData);
    const [unit, setUnit] = useState(parseInt(1));
    const [isValid, setIsValid] = useState({
        materials: true,
        note: false,
        size: false,
        name: true
    });
    const [buttonState, setButtonState] = useState(true);
    useEffect(()=>{
        orderPage()
    },[])
    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        const type = event.target.type;
        const id = event.target.id;
        let newData = { ...datas };
        newData.pizzaName = pizzaName;
        setDatas(newData);
        if (type == "radio") {
            newData.boyut = id;
            setDatas(newData);
        }
        if (type == "select-one") {
            newData.hamur = value;

            setDatas(newData);
        }
        if (type == "checkbox") {
            if (newData.malzemeler.includes(name)) {
                var index = newData.malzemeler.indexOf(name);
                if (index !== -1) {
                    newData.malzemeler.splice(index, 1);
                }
            } else {
                newData.malzemeler.push(name);
            }
            setDatas(newData);
            if (datas.malzemeler.length < 4 || datas.malzemeler.length >= 11) {
                setIsValid({ ...isValid, materials: true })
            } else {
                setIsValid({ ...isValid, materials: false })
            }
        }
        if (type == "text") {
            if (name == "buyerName") {
                newData.isim = value;
            }
            if (name == "not") {
                newData.notext = value;
            }
            if (newData.notext.length < 5) {
                setIsValid({ ...isValid, note: true })
                if (newData.notext.length == 0) {
                    setIsValid({ ...isValid, note: false })
                }
            }
            else {
                setIsValid({ ...isValid, note: false })
            }
            if (newData.isim.length == 0) {
                setIsValid({ ...isValid, name: true })
            } else {
                setIsValid({ ...isValid, name: false })
            }
            setDatas(newData);
        }

    }

    useEffect(() => {
        if (!isValid.materials && !isValid.note && !isValid.size && !isValid.name) {
            setButtonState(false)
        } else {
            setButtonState(true)
        }
    }, [isValid]);

    useEffect(() => {

        let newMaterialPrice = datas.malzemeler.length * 5 * unit;
        let newPrice = orjPrice * unit + newMaterialPrice;
        setMaterialPrice(newMaterialPrice);
        setPrice(newPrice);
        
        if (datas.boyut == "") {
            setIsValid({ ...isValid, size: true })
        } else {
            setIsValid({ ...isValid, size: false })
        }
    }, [unit, datas]);

    function priceChange(name) {
        setUnit((prevUnit) => {
            let newUnit = prevUnit;
            if (name === "-") {
                if (newUnit > 1) {
                    newUnit -= 1;
                }
            } else if (name === "+") {
                newUnit += 1;
            }
            return newUnit;
        });
    }

    function unitChange(event) {
        event.preventDefault();
        priceChange(event.target.name);
    }

    function onSubmit(event) {
        
        event.preventDefault();
        const url = "https://reqres.in/api/pizza"
        axios
        .post(url, datas)
        .then((response) => {
            setChoosenOne(datas)
            console.log(response)
            orderCompleted();
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <>
            <div className='orderpage'>
                {/*Header Start*/}
                <header className='orderHeader'>
                    <div className='headerIn'>
                        <img className='logo' src='public\homepage\logo.svg' />
                        <div className='links'>
                            <NavLink
                                className='opacity'
                              
                                onClick={homePage}
                            >
                                Anasayfa
                            </NavLink>
                            -
                            <NavLink
                                active
                              
                                onClick={orderPage}
                            >
                                Sipariş Oluştur
                            </NavLink>
                        </div>
                    </div>
                </header>
                {/*Header End*/}
                {/*/////////////////////////////////////////////*/}
                {/*Form Start*/}

                <div className='formDiv '>
                    <div className='flexStart allMargin'> <h2>{pizzaName}</h2>
                        <div className='displayRow productData allMargin'>
                            <h2>{pizzaPrice}₺</h2>
                            <div className='displayRow '><p className='pt'>4.9</p><p>(200)</p></div>
                        </div>
                        <p className='flexStart allMargin'>Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir. </p>
                    </div>
                    <div>
                        <Form onChange={handleChange} onSubmit={onSubmit}>
                            <div className='flexStart noteDiv allMargin'>
                                <h2 >İsim</h2>
                                <FormGroup >
                                    <Input type='text'
                                        className="mb-3"
                                        placeholder="Adınız A.S.İ.Z mi?"
                                        invalid={isValid.name}
                                        name="buyerName"
                                    />
                                </FormGroup>
                                {isValid.name && (
                                    <span className='colorRed flexStart'>
                                        Lütfen bir isim girin.
                                    </span>
                                )}
                            </div>
                            <div className='displayRow allMargin 
                           '>

                                <div className='chooseSize flexStart'>
                                    <h2>Boyut Seç<span className='colorRed'> *</span></h2>
                                    <FormGroup >
                                        <FormGroup check>
                                            <Label check>
                                                <Input
                                                    name="radio"
                                                    type="radio"
                                                    id="Küçük"
                                                    invalid={isValid.size}

                                                />
                                                {' '}

                                                Küçük
                                            </Label>
                                        </FormGroup>
                                        <FormGroup check>
                                            <Label check>
                                                <Input
                                                    name="radio"
                                                    type="radio"
                                                    id="Orta"
                                                    invalid={isValid.size}
                                                />
                                                {' '}

                                                Orta
                                            </Label>
                                        </FormGroup>
                                        <FormGroup
                                            check
                                        ><Label check>
                                                <Input
                                                    name="radio"
                                                    type="radio"
                                                    id="Büyük"
                                                    invalid={isValid.size}
                                                />
                                                {' '}

                                                Büyük
                                            </Label>
                                        </FormGroup>
                                        {isValid.size && (
                                            <span className='colorRed flexStart'>
                                                Boyut seçmelisiniz!
                                            </span>
                                        )}
                                    </FormGroup>
                                </div>
                                <div className='chooseSize'>
                                    <h2>Hamur Seç<span className='colorRed'> *</span></h2>
                                    <Input
                                        bsSize="lg"
                                        className="mb-3"
                                        type="select"
                                        defaultValue={datas.hamur}
                                    >

                                        <option >
                                            Kalın
                                        </option>
                                        <option>
                                            Normal
                                        </option>
                                        <option>
                                            İnce
                                        </option>
                                    </Input>
                                    {isValid.dough && (
                                        <span className='colorRed flexStart'>
                                            Hamur seçmelisiniz
                                        </span>
                                    )}
                                </div>
                            </div>

                            <div className='allMargin '>
                                <div className='flexStart '>
                                    <h2 className='allMargin'>Ek Malzemeler</h2>
                                    <p className='allMargin'>En fazla 10 Malzeme seçebilirsiniz. 5₺</p>
                                </div>
                                <div className='flexStart materialsDiv allMargin'>
                                    {materials.map((material, index) => (<Materials materialName={material.materialName} key={index} isvalid={isValid.materials} />))}

                                </div>
                                {isValid.materials && (
                                    <span className='colorRed flexStart'>
                                        En az 4, en fazla 10 seçim yapabilirsiniz!
                                    </span>
                                )}
                            </div>
                            <div className='flexStart noteDiv allMargin'>
                                <h2 >Sipariş Notu</h2>
                                <FormGroup >
                                    <Input type='text'
                                        className="mb-3"
                                        placeholder="Siparişine eklemek istediğin bir not var mı?"
                                        invalid={isValid.note}
                                        name="not"
                                    />
                                </FormGroup>
                                {isValid.note && (
                                    <span className='colorRed flexStart'>
                                        Notunuz 5 karakterden kısa olamaz!
                                    </span>
                                )}
                            </div>
                            <div className='borderBottom'></div>

                            <div className='displayRow spaceBetween orderDiv'>

                                <div className='displayRow unitContainer'>
                                    <Button onClick={unitChange} name="-"
                                    >
                                        -
                                    </Button>
                                    <div className='state centerAll'>{unit}</div>
                                    <Button onClick={unitChange} name="+"
                                    >
                                        +
                                    </Button>
                                </div>
                                <div>
                                    <div className='orderDivIn displayCol ' >
                                        <h2 className='flexStart'>Sipariş Toplamı</h2>
                                        <div className='displayCol centerAll'>
                                            <div className='spaceBetween colorLightGray'>
                                                <p>Seçimler</p>
                                                <p>{materialPrice}₺</p>
                                            </div>
                                            <div className='spaceBetween colorRed'>
                                                <p>Toplam</p>
                                                <p>{price}₺</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='displayCol'>
                                        <Button
                                            className='orderButton'
                                            disabled={buttonState}
                                            
                                        >
                                            SİPARİŞ VER
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
                {/*Form End*/}
                {/*/////////////////////////////////////////////*/}
                
            </div >
            <Footer/>
        </>
    )
}

export default OrderPage
