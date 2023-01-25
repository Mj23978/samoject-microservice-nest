import { Field, InputType } from "@nestjs/graphql";
import { ProjectCreateOrConnectWithoutSpacesInput } from "../inputs/ProjectCreateOrConnectWithoutSpacesInput";
import { ProjectCreateWithoutSpacesInput } from "../inputs/ProjectCreateWithoutSpacesInput";
import { ProjectUpdateWithoutSpacesInput } from "../inputs/ProjectUpdateWithoutSpacesInput";
import { ProjectUpsertWithoutSpacesInput } from "../inputs/ProjectUpsertWithoutSpacesInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@InputType("ProjectUpdateOneRequiredWithoutSpacesNestedInput", {
  isAbstract: true
})
export class ProjectUpdateOneRequiredWithoutSpacesNestedInput {
  @Field(() => ProjectCreateWithoutSpacesInput, {
    nullable: true
  })
  create?: ProjectCreateWithoutSpacesInput | undefined;

  @Field(() => ProjectCreateOrConnectWithoutSpacesInput, {
    nullable: true
  })
  connectOrCreate?: ProjectCreateOrConnectWithoutSpacesInput | undefined;

  @Field(() => ProjectUpsertWithoutSpacesInput, {
    nullable: true
  })
  upsert?: ProjectUpsertWithoutSpacesInput | undefined;

  @Field(() => ProjectWhereUniqueInput, {
    nullable: true
  })
  connect?: ProjectWhereUniqueInput | undefined;

  @Field(() => ProjectUpdateWithoutSpacesInput, {
    nullable: true
  })
  update?: ProjectUpdateWithoutSpacesInput | undefined;
}
