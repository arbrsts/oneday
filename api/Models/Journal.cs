namespace api.Models;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
public class Journal
{

    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }

    public string? Username { get; set; }

    public string? Password { get; set; }
}