import { Label, Input, FormGroup } from 'reactstrap';

function Materials({ materialName }) {

    return (
        <>
            <FormGroup check inline key={materialName}>
                <Label check>
                    <Input type="checkbox" name={materialName}/>
                    {materialName}
                </Label>
            </FormGroup>
          
        </>
    );
}

export default Materials; 
