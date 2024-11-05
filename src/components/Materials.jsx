import { Label, Input, FormGroup } from 'reactstrap';

function Materials({ materialName ,index}) {

    return (
        <>
            <FormGroup check inline key={index}>
                <Label check>
                    <Input type="checkbox" name={materialName}/>
                    {materialName}
                </Label>
            </FormGroup>
          
        </>
    );
}

export default Materials; 
