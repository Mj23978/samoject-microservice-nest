import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateWithoutChatInput } from "../inputs/ProjectCreateWithoutChatInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType("ProjectCreateOrConnectWithoutChatInput", {
  isAbstract: true
})
export class ProjectCreateOrConnectWithoutChatInput {
  @TypeGraphQL.Field(_type => ProjectWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProjectCreateWithoutChatInput, {
    nullable: false
  })
  create!: ProjectCreateWithoutChatInput;
}
