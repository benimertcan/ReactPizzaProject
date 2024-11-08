import { Label, Input, FormGroup } from 'reactstrap';

function Materials({ materialName, isvalid }) {

    return (
        <>
            <FormGroup check inline key={materialName}>
                <Label check>
                    <Input type="checkbox" name={materialName} invalid={isvalid} />
                    {materialName}
                </Label>
            </FormGroup>

        </>
    );
}

export default Materials; 
