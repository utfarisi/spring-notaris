package edu.ut.kelompokb.notaryapp.dto;

import edu.ut.kelompokb.notaryapp.etc.DeedStatus;

public record DeedStatusUpdateRequest(
        String numberInvoice, DeedStatus status, String note) {

}
