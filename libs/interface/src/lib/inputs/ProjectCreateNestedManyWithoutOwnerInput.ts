import { Field, InputType } from "@nestjs/graphql";
import { ProjectCreateManyOwnerInputEnvelope } from "../inputs/ProjectCreateManyOwnerInputEnvelope";
import { ProjectCreateOrConnectWithoutOwnerInput } from "../inputs/ProjectCreateOrConnectWithoutOwnerInput";
import { ProjectCreateWithoutOwnerInput } from "../inputs/ProjectCreateWithoutOwnerInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@InputType("ProjectCreateNestedManyWithoutOwnerInput", {
  isAbstract: true
})
export class ProjectCreateNestedManyWithoutOwnerInput {
  @Field(() => [ProjectCreateWithoutOwnerInput], {
    nullable: true
  })
  create?: ProjectCreateWithoutOwnerInput[] | undefined;

  @Field(() => [ProjectCreateOrConnectWithoutOwnerInput], {
    nullable: true
  })
  connectOrCreate?: ProjectCreateOrConnectWithoutOwnerInput[] | undefined;

  @Field(() => ProjectCreateManyOwnerInputEnvelope, {
    nullable: true
  })
  createMany?: ProjectCreateManyOwnerInputEnvelope | undefined;

  @Field(() => [ProjectWhereUniqueInput], {
    nullable: true
  })
  connect?: ProjectWhereUniqueInput[] | undefined;
}
