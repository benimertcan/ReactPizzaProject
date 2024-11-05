import '../App.css'
import './orderPage.css'
import materials from '../MaterialsData'
import { NavLink, Label, Form, Input, FormGroup } from 'reactstrap';
import Materials from './Materials';

function OrderPage() {


    return (
        <>
            <div className='orderpage'>
                {/*Header Start*/}
                <div className='header'>
                    <div className='headerIn'>
                        <img className='logo' src='public\homepage\logo.svg' />
                        <div className='links'>
                            <NavLink
                                disabled
                                href="#"
                                className='opacity'
                            >
                                Anasayfa
                            </NavLink>
                            <a>-</a>
                            <NavLink className='opacity' disabled href="#">
                                Seçenekler
                            </NavLink>
                            <a>-</a>
                            <NavLink
                                active
                                href="#"
                            >
                                Sipariş Oluştur
                            </NavLink>
                        </div>
                    </div>
                </div>
                {/*Header End*/}
                {/*/////////////////////////////////////////////*/}
                {/*Form Start*/}
                <div className='formDiv'>
                    <div className='flexStart'> <h2>Position Absolute Pizza</h2>
                        <div className='displayRow productData'>
                            <h2>85.50</h2>
                            <div className='displayRow '><p className='pt'>4.9</p><p>(200)</p></div>
                        </div>
                        <p className='flexStart'>Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir. </p></div>
                    <div>
                        <Form>
                            <div className='displayRow spaceBetween
                           '><div className='chooseSize'>
                                    <h2>Boyut Seç<span className='colorRed'>*</span></h2>
                                    <Label check>
                                        <Input
                                            name="kucuk"
                                            type="radio"
                                        />
                                        {' '}
                                            Küçük
                                        </Label>
                                        <Label check>
                                        <Input
                                            name="orta"
                                            type="radio"
                                        />
                                        {' '}
                                            Orta
                                        </Label>
                                   <Label check>
                                        <Input
                                            name="buyuk"
                                            type="radio"
                                        />
                                        {' '}
                                        
                                            Büyük
                                        </Label>
                                </div>
                                <div className='chooseSize'>
                                    <h2>Hamur Seç<span className='colorRed'>*</span></h2>
                                    <Input
                                        bsSize="lg"
                                        className="mb-3"
                                        type="select"
                                    >
                                        <option>
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

                            <div>
                                <div className='flexStart'>
                                    <h2>Ek Malzemeler</h2>
                                    <p>En fazla 10 Malzeme seçebilirsiniz. 5</p>
                                </div>
                                <div  className='flexStart materialsDiv'>
    {materials.map((material,index) => (<Materials materialName={material.materialName} key={index}/>))}
                                </div>
                            </div>
                            

                        </Form>
                    </div>
                </div>
                {/*Form End*/}
                {/*/////////////////////////////////////////////*/}
            </div >
        </>
    )
}

export default OrderPage
