import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateManyOwnerInputEnvelope } from "../inputs/ProjectCreateManyOwnerInputEnvelope";
import { ProjectCreateOrConnectWithoutOwnerInput } from "../inputs/ProjectCreateOrConnectWithoutOwnerInput";
import { ProjectCreateWithoutOwnerInput } from "../inputs/ProjectCreateWithoutOwnerInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType("ProjectCreateNestedManyWithoutOwnerInput", {
  isAbstract: true
})
export class ProjectCreateNestedManyWithoutOwnerInput {
  @TypeGraphQL.Field(_type => [ProjectCreateWithoutOwnerInput], {
    nullable: true
  })
  create?: ProjectCreateWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectCreateOrConnectWithoutOwnerInput], {
    nullable: true
  })
  connectOrCreate?: ProjectCreateOrConnectWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => ProjectCreateManyOwnerInputEnvelope, {
    nullable: true
  })
  createMany?: ProjectCreateManyOwnerInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ProjectWhereUniqueInput], {
    nullable: true
  })
  connect?: ProjectWhereUniqueInput[] | undefined;
}
