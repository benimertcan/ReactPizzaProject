import { Label, Input, FormGroup } from 'reactstrap';

function Materials({ materialName ,key}) {

    return (
        <>
            <FormGroup check inline key={key}>
                <Label check>
                    <Input type="checkbox" />
                    {materialName}
                </Label>
            </FormGroup>
          
        </>
    );
}

export default Materials; 
