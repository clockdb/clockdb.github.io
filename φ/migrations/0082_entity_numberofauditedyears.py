# Generated by Django 3.1.4 on 2021-04-21 15:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('φ', '0081_auto_20210421_0904'),
    ]

    operations = [
        migrations.AddField(
            model_name='entity',
            name='NumberOfAuditedYears',
            field=models.IntegerField(default=0),
        ),
    ]
