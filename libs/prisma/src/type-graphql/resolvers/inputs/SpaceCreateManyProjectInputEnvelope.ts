import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { SpaceCreateManyProjectInput } from "../inputs/SpaceCreateManyProjectInput";

@TypeGraphQL.InputType("SpaceCreateManyProjectInputEnvelope", {
  isAbstract: true
})
export class SpaceCreateManyProjectInputEnvelope {
  @TypeGraphQL.Field(_type => [SpaceCreateManyProjectInput], {
    nullable: false
  })
  data!: SpaceCreateManyProjectInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
