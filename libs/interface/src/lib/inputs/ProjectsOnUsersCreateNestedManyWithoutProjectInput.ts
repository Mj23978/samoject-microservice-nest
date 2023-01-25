import { Field, InputType } from "@nestjs/graphql";
import { ProjectsOnUsersCreateManyProjectInputEnvelope } from "../inputs/ProjectsOnUsersCreateManyProjectInputEnvelope";
import { ProjectsOnUsersCreateOrConnectWithoutProjectInput } from "../inputs/ProjectsOnUsersCreateOrConnectWithoutProjectInput";
import { ProjectsOnUsersCreateWithoutProjectInput } from "../inputs/ProjectsOnUsersCreateWithoutProjectInput";
import { ProjectsOnUsersWhereUniqueInput } from "../inputs/ProjectsOnUsersWhereUniqueInput";

@InputType("ProjectsOnUsersCreateNestedManyWithoutProjectInput", {
  isAbstract: true
})
export class ProjectsOnUsersCreateNestedManyWithoutProjectInput {
  @Field(() => [ProjectsOnUsersCreateWithoutProjectInput], {
    nullable: true
  })
  create?: ProjectsOnUsersCreateWithoutProjectInput[] | undefined;

  @Field(() => [ProjectsOnUsersCreateOrConnectWithoutProjectInput], {
    nullable: true
  })
  connectOrCreate?: ProjectsOnUsersCreateOrConnectWithoutProjectInput[] | undefined;

  @Field(() => ProjectsOnUsersCreateManyProjectInputEnvelope, {
    nullable: true
  })
  createMany?: ProjectsOnUsersCreateManyProjectInputEnvelope | undefined;

  @Field(() => [ProjectsOnUsersWhereUniqueInput], {
    nullable: true
  })
  connect?: ProjectsOnUsersWhereUniqueInput[] | undefined;
}
