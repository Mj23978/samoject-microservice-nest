import { Field, InputType } from "@nestjs/graphql";
import { ProjectCreateOrConnectWithoutSpacesInput } from "../inputs/ProjectCreateOrConnectWithoutSpacesInput";
import { ProjectCreateWithoutSpacesInput } from "../inputs/ProjectCreateWithoutSpacesInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@InputType("ProjectCreateNestedOneWithoutSpacesInput", {
  isAbstract: true
})
export class ProjectCreateNestedOneWithoutSpacesInput {
  @Field(() => ProjectCreateWithoutSpacesInput, {
    nullable: true
  })
  create?: ProjectCreateWithoutSpacesInput | undefined;

  @Field(() => ProjectCreateOrConnectWithoutSpacesInput, {
    nullable: true
  })
  connectOrCreate?: ProjectCreateOrConnectWithoutSpacesInput | undefined;

  @Field(() => ProjectWhereUniqueInput, {
    nullable: true
  })
  connect?: ProjectWhereUniqueInput | undefined;
}
