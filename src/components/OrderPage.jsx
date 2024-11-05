import '../App.css'
import './orderPage.css'
import materials from '../MaterialsData'
import { NavLink, Label, Form, Input, FormGroup, Button } from 'reactstrap';
import Materials from './Materials';
import 'bootstrap/dist/css/bootstrap.min.css';
function OrderPage() {


    return (
        <>
            <div className='orderpage'>
                {/*Header Start*/}
                <header className='header'>
                    <div className='headerIn'>
                        <img className='logo' src='public\homepage\logo.svg' />
                        <div className='links'>
                            <NavLink

                                href="#"
                                className='opacity'
                            >
                                Anasayfa
                            </NavLink>
                            <a>-</a>
                            <NavLink className='opacity' href="#">
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
                </header>
                {/*Header End*/}
                {/*/////////////////////////////////////////////*/}
                {/*Form Start*/}
                <div className='formDiv '>
                    <div className='flexStart allPadding'> <h2>Position Absolute Pizza</h2>
                        <div className='displayRow productData allPadding'>
                            <h2>85.50₺</h2>
                            <div className='displayRow '><p className='pt'>4.9</p><p>(200)</p></div>
                        </div>
                        <p className='flexStart allPadding'>Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir. </p></div>
                    <div>
                        <Form>
                            <div className='displayRow allPadding spaceBetween 
                           '><div className='chooseSize'>
                                    <h2>Boyut Seç<span className='colorRed'>*</span></h2>

                                    <FormGroup check>
                                        <Input
                                            name="radio"
                                            type="radio"
                                        />
                                        {' '}
                                        <Label check>
                                            Küçük
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Input
                                            name="radio"
                                            type="radio"
                                        />
                                        {' '}
                                        <Label check>
                                            Orta
                                        </Label>
                                    </FormGroup>
                                    <FormGroup
                                        check
                                        disabled
                                    >
                                        <Input
                                            name="radio"
                                            type="radio"
                                        />
                                        {' '}
                                        <Label check>
                                            Büyük
                                        </Label>
                                    </FormGroup>
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

                            <div className='allPadding '>
                                <div className='flexStart '>
                                    <h2 className='allPadding'>Ek Malzemeler</h2>
                                    <p className='allPadding'>En fazla 10 Malzeme seçebilirsiniz. 5₺</p>
                                </div>
                                <div className='flexStart materialsDiv'>
                                    {materials.map((material, index) => (<Materials materialName={material.materialName} key={index} />))}
                                </div>
                            </div>
                            <div className='flexStart noteDiv allPadding'>
                                <h2 >Sipariş Notu</h2>
                                <FormGroup >
                                    <Input type='text'
                                        className="mb-3"
                                        placeholder="Siparişine eklemek istediğin bir not var mı?"
                                    />
                                </FormGroup>
                            </div>
                            <div className='borderBottom'></div>
                            <div className='displayRow spaceBetween orderDiv'>
                                <div className='displayRow'>
                                    <Button
                                    >
                                        -
                                    </Button>
                                    <div className='state centerAll'>1</div>
                                    <Button
                                    >
                                        +
                                    </Button>
                                </div>
                                <div className='orderDivIn displayCol' >
                                    <h2 className='flexStart'>Sipariş Toplamı</h2>
                                    <div className='displayCol centerAll'>
                                        <div className='spaceBetween colorLightGray'>
                                            <p>Seçimler</p>
                                            <p>25.00₺</p>
                                        </div>
                                        <div className='spaceBetween colorRed'>
                                            <p>Toplam</p>
                                            <p>110.00₺</p>
                                        </div>
                                    </div>
                                    <div >
                                        <Button
                                            className='orderButton'
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
