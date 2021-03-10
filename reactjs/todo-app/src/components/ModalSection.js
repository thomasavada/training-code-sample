import {FormLayout, Modal, TextContainer, TextField} from "@shopify/polaris";
import React from "react";

function ModalSection({value, onChange}) {
  return (
    <Modal.Section>
      <TextContainer>
        <FormLayout>
          <TextField
            label={'Title'}
            value={value}
            onChange={onChange}
          />
        </FormLayout>
      </TextContainer>
    </Modal.Section>
  )
}

export default ModalSection;
