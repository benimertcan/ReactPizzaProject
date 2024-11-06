import '../App.css'
import './orderPage.css'
import materials from '../MaterialsData'
import { NavLink, Label, Form, Input, FormGroup, Button, FormFeedback } from 'reactstrap';
import Materials from './Materials';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';


function OrderPage({ pizzaName, pizzaPrice }) {
    const data = {
        isim: "",
        boyut: "",
        hamur: "",
        malzemeler: [],
        notext: ""
    }
    const orjPrice = parseFloat(pizzaPrice);
    const [price, setPrice] = useState(parseFloat(pizzaPrice))
    const [materialPrice, setMaterialPrice] = useState(parseFloat(0))
    const [datas, setDatas] = useState(data);
    const [unit, setUnit] = useState(parseInt(1));
    const [errors, setErrors] = useState({
        materials:"",
        note:""
    });
    const [isValid, setIsValid] = useState({
        materials:false,
        note:false
    });
    const [buttonState, setButtonState] = useState(true);
    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        const type = event.target.type;
        const id = event.target.id;
        let newData = { ...datas };
        newData.isim = pizzaName;
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
            if(datas.malzemeler.length<4 ||datas.malzemeler.length>=11   ){
                setIsValid({...isValid,materials:true})
            }else{
                setIsValid({...isValid,materials:false})
            }
        }
        if (type == "text") {
            newData.notext = value;
            setDatas(newData);
            if(newData.notext.length<5){
                setIsValid({...isValid,note:true})
                if(newData.notext.length==0){
                    setIsValid({...isValid,note:false})
                }
            }
            else{
                setIsValid({...isValid,note:false})
            }
        }
    }
    useEffect(() => {
        let newMaterialPrice = datas.malzemeler.length * 5 * unit;
        let newPrice = orjPrice * unit + newMaterialPrice;
        setMaterialPrice(newMaterialPrice);
        setPrice(newPrice);
        if(isValid.materials){
            setErrors({...errors,materials:"En az 4, en fazla 10 seçim yapabilirsiniz!"})
        }else{
            setErrors({...errors,materials:""})
        }
        if(isValid.note){
            setErrors({...errors,note:"Notunuz 5 karakterden kısa olamaz!"})
        }else{
            setErrors({...errors,note:""})
        }
        console.log(isValid);
        if(isValid.materials & isValid.note){
            setButtonState(false)
        }else{
            setButtonState(true)
        }
        
    }, [unit, datas,isValid]);

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
        console.log(materialPrice);
        priceChange(event.target.name, materialPrice);
    }


    return (
        <>
            <div className='orderpage'>
                {/*Header Start*/}
                <header className='header'>
                    <div className='headerIn'>
                        <img className='logo' src='public\homepage\logo.svg' />
                        <div className='links'>
                            <NavLink
                                className='opacity'
                                href="#"

                            >
                                Anasayfa
                            </NavLink>
                            -
                            <NavLink
                                active
                                href="#"
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
                        <p className='flexStart allMargin'>Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir. </p></div>
                    <div>
                        <Form onChange={handleChange}>
                            <div className='displayRow allMargin 
                           '><div className='chooseSize spaceBetween'>
                                    <h2>Boyut Seç<span className='colorRed'> *</span></h2>
                                    <FormGroup>
                                        <FormGroup check>
                                            <Label check>
                                                <Input
                                                    name="radio"
                                                    type="radio"
                                                    id="Küçük"
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
                                                />
                                                {' '}

                                                Büyük
                                            </Label>
                                        </FormGroup>
                                        <FormFeedback invalid>
                                            Lütfen bir seçim yap!
                                        </FormFeedback>
                                    </FormGroup>
                                </div>
                                <div className='chooseSize'>
                                    <h2>Hamur Seç<span className='colorRed'> *</span></h2>
                                    <Input
                                        bsSize="lg"
                                        className="mb-3"
                                        type="select"
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
                           {errors.materials}
                        </span>
                    )}
                            </div>
                            <div className='flexStart noteDiv allMargin'>
                                <h2 >Sipariş Notu</h2>
                                <FormGroup >
                                    <Input type='text'
                                        className="mb-3"
                                        placeholder="Siparişine eklemek istediğin bir not var mı?"
                                    />
                                </FormGroup>
                                {isValid.note && (
                        <span className='colorRed flexStart'>
                            {errors.note}
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
                <footer>

                </footer>
            </div >
        </>
    )
}

export default OrderPage
