import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutProjectsInput } from "../inputs/UserCreateNestedOneWithoutProjectsInput";

@TypeGraphQL.InputType("ProjectsOnUsersCreateWithoutProjectInput", {
  isAbstract: true
})
export class ProjectsOnUsersCreateWithoutProjectInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  assignedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  assignedBy!: string;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutProjectsInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutProjectsInput;
}
