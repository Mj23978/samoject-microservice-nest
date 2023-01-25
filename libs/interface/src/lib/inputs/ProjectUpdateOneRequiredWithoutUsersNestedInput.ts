import { Field, InputType } from "@nestjs/graphql";
import { ProjectCreateOrConnectWithoutUsersInput } from "../inputs/ProjectCreateOrConnectWithoutUsersInput";
import { ProjectCreateWithoutUsersInput } from "../inputs/ProjectCreateWithoutUsersInput";
import { ProjectUpdateWithoutUsersInput } from "../inputs/ProjectUpdateWithoutUsersInput";
import { ProjectUpsertWithoutUsersInput } from "../inputs/ProjectUpsertWithoutUsersInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@InputType("ProjectUpdateOneRequiredWithoutUsersNestedInput", {
  isAbstract: true
})
export class ProjectUpdateOneRequiredWithoutUsersNestedInput {
  @Field(() => ProjectCreateWithoutUsersInput, {
    nullable: true
  })
  create?: ProjectCreateWithoutUsersInput | undefined;

  @Field(() => ProjectCreateOrConnectWithoutUsersInput, {
    nullable: true
  })
  connectOrCreate?: ProjectCreateOrConnectWithoutUsersInput | undefined;

  @Field(() => ProjectUpsertWithoutUsersInput, {
    nullable: true
  })
  upsert?: ProjectUpsertWithoutUsersInput | undefined;

  @Field(() => ProjectWhereUniqueInput, {
    nullable: true
  })
  connect?: ProjectWhereUniqueInput | undefined;

  @Field(() => ProjectUpdateWithoutUsersInput, {
    nullable: true
  })
  update?: ProjectUpdateWithoutUsersInput | undefined;
}
