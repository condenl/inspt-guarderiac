import { NgForm } from "@angular/forms";
import { Vehicle } from "./vehicle";

export class FormUtils {

    public static vehicleToFormData(model: Vehicle): FormData {
        let formData: FormData = new FormData();
        if (model.id != null) {
            formData.append("id", model.id.toString());
        }
        formData.append("enrollment", model.enrollment);
        formData.append("name", model.name);
        if (model.appUserDTO.id != null) {
            formData.append("appUserDTO.id", model.appUserDTO.id.toString());
        }
        if (model.vehicleFamilyDTO.id != null) {
            formData.append("vehicleFamilyDTO.id", model.vehicleFamilyDTO.id.toString());
        }
        if (model.photoDTO.file != null) {
            formData.append("photoDTO.file", model.photoDTO.file);
        }
        return formData;
    }
  

}