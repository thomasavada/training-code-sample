import {FormLayout, Modal, TextField} from "@shopify/polaris";
import React from "react";

function ModalSection({value, onChange}) {
  return (
    <Modal.Section>
        <FormLayout>
            <TextField
                label={'Title'}
                value={value}
                onChange={onChange}
                autoComplete={false}
            />
        </FormLayout>
    </Modal.Section>
  )
}

export default ModalSection;
